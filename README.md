_________________________________________________________________________________________________________________________________________
![screencapture-localhost-3000-chat-2025-01-14-19_55_01](https://github.com/user-attachments/assets/3a8ef4ce-d550-4616-af8a-b64076f934d5)
_________________________________________________________________________________________________________________________________________
# Chat Platform - Real-Time Messaging

A real-time chat platform that allows users to communicate instantly. Built with WebSocket protocol for live messaging and asynchronous request handling for fast interactions. Users can create, read, update, and delete chats, start private conversations, and search for chats and users.

### Features
- **Real-Time Messaging**: Instant message delivery using WebSockets.
- **Chat CRUD**: Users can create, update, and delete chats.
- **Private Chats**: Users can create private one-on-one conversations.
- **Search**: Search chats and users to find relevant content.
- **Modern UI**: Built with React and Material-UI (MUI), supporting light/dark theme modes.
- **Asynchronous Backend**: Handled by Django, Celery, and RabbitMQ for scalability.
- **Dockerized**: Containerized app for easy deployment.

### Tech Stack
- **Frontend**: React, TypeScript, MUI, Framer Motion, React DOM
- **Backend**: Django, JWT, Celery, WebSockets (Django Channels), DRF
- **AMQP (Message Broker)**: RabbitMQ
- **Caching/Storage**: Redis, SQLite3
- **Deployment**: Docker
