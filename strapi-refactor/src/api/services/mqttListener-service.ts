import * as mqtt from 'mqtt';

class MqttListener {
    private client: mqtt.MqttClient;
  
    constructor() {
      // Set up the MQTT client
      this.client = mqtt.connect('mqtt://localhost:1883');
      
      // Set up event listeners
      this.client.on('connect', () => {
        console.log('MQTT client connected');
      });
  
      this.client.on('message', (topic, message) => {
        console.log(`Received message on topic ${topic}: ${message.toString()}`);
        // Do something with the message
      });
  
      this.client.on('error', (error) => {
        console.error('MQTT client error:', error);
      });
    }
  
    public subscribe(topic: string): void {
      this.client.subscribe(topic);
    }
  }
export { MqttListener };
