export class Network {
    constructor(playerName, onReady, readyButton) {
        this.ws = null;
        this.playerName = playerName;
        this.onReady = onReady;
        this.readyButton = readyButton;
    }
  
    connect(url) {
      this.ws = new WebSocket(url);
      this.ws.onopen = () => {
        console.log('Connected to server');
        this.handshake(); // Send join message when connected
      };
      this.ws.onmessage = (e) => this.handleMessage(e);
      this.ws.onclose = () => console.log('Disconnected');
      this.ws.onerror = (e) => console.error('WS Error', e);
    }
  
    handshake() {
        const joinMsg = {
          type: 'join',
          name: this.playerName
        };
        this.send(joinMsg);
        this.showReadyButton();
    }

    handleMessage(event) {
      const msg = JSON.parse(event.data);
      //if (msg.type === 'ready') this.onReady();
      if (msg.type === 'start_game') this.onReady();
    }

    showReadyButton() {
        if (!this.readyButton) return;
        this.readyButton.classList.remove('hidden');
        this.readyButton.onclick = () => {
          this.send({ type: 'ready' });
          this.hideReadyButton();
        };
    }
    
    hideReadyButton() {
        if (!this.readyButton) return;
        this.readyButton.classList.add('hidden');
    }
  
    send(data) {
      this.ws?.send(JSON.stringify(data));
    }
  
    disconnect() {
      this.ws?.close();
    }
  }
  