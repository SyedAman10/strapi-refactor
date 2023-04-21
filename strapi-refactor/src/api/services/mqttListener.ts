import { MqttListener } from './../services/mqttListener-service';

// Create a new instance of the MqttListener class
const mqttListener = new MqttListener();

// Subscribe to the desired MQTT topic(s)
mqttListener.subscribe('my/mqtt/topic');
