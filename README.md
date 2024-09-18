**React Flow Playground**

Welcome to the React Flow Playground! This project demonstrates a playground for building interactive node-based graphs using React Flow. It provides a starting point to create custom nodes, edges, and integrate additional functionalities like managing state, handling API calls, and more.

**Features**
**Interactive Node-Based Graphs:** Build and visualize directed and undirected graphs.
**Custom Nodes & Edges:** Create and modify nodes and edges dynamically.
**State Management:** Utilize Zustand for efficient state management.
**API Integration:** Backend integration using FastAPI to process node/edge data.
**Graph Analysis:** Basic graph properties such as determining if a graph is a Directed Acyclic Graph (DAG).
**Extensible Node Components:** Abstraction for reusability and flexibility in creating new node types.
**Modern UI Components:** Styled using Chakra UI.

**Project Structure**
**Frontend:** Built with React, Zustand for state management, and Chakra UI for styling.
**Backend:** Simple Python/FastAPI backend to process graph-related requests.
**Nodes:** Modular design for reusable and customizable nodes (input, output, text, LLMs).

**Getting Started**:
**Prerequisites**
Make sure you have the following installed:

Node.js (v14 or higher)
npm or yarn
Python 3.8+ (for the FastAPI backend)
**Installation**
Clone the repository:
bash
git clone https://github.com/rajeshkrishnait/ReactflowPlayground.git
cd ReactflowPlayground

Install frontend dependencies:
bash
cd frontend
npm install

**Install backend dependencies:**
bash
cd backend
pip install -r requirements.txt

**Running the Project**
1. Start the Backend (FastAPI):
Navigate to the backend folder and start the FastAPI server:

bash
uvicorn main:app --reload
The API will be available at http://127.0.0.1:8000.

2. Start the Frontend (React):
In a separate terminal, navigate to the frontend folder and start the React development server:
bash
npm start
The React app will be available at http://localhost:3000.

**Usage**
You can interact with the nodes and edges on the graph canvas.
Send graph data (nodes, edges) to the backend via API calls to analyze properties like the number of nodes, edges, and whether the graph is a DAG.
Create new node types by following the abstraction model defined in the project for modular node creation.
API Endpoints
POST /graph/analysis: Accepts nodes and edges data and returns a JSON response with the number of nodes, edges, and whether the graph is a DAG.
State Management
The project uses Zustand for lightweight and efficient state management.

**Graph Rendering**
React Flow is used to render the interactive graph. Nodes and edges are customizable, and new node types can be created easily using the abstraction provided.

**License**
This project is licensed under the MIT License.

**Acknowledgments**
React Flow for providing the core graph visualization functionality.
FastAPI for the lightweight backend framework.
Zustand for simple state management.
Chakra UI for modern and accessible component styling.
