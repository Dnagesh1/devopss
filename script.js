document.getElementById('run').addEventListener('click', async function() {
    const code = document.getElementById('code').value;
    const response = await fetch('/.netlify/functions/execute', {
        method: 'POST',
        body: JSON.stringify({ code }),
    });
    const result = await response.json();
    document.getElementById('output').innerText = result.output;
});
