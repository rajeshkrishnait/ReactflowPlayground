export const submitPipeline = async ({ nodes, edges }) => {
    const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};