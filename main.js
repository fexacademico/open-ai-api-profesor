const YOUR_API_KEY_HERE = ``;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('promptForm');
    const promptInput = document.getElementById('userPrompt');
    const responsesContainer = document.getElementById('responses');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const prompt = promptInput.value.trim();
      if (!prompt) return;
  
      const responseEl = document.createElement('div');
      responseEl.className = 'response';
      responseEl.textContent = 'Procesando...';
      responsesContainer.prepend(responseEl);
  
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${YOUR_API_KEY_HERE}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            // Temperamento
            // 0 (Very deterministic, less creative)
            // 0.7 (Balanced creativity)
            // 1.0 (More random and creative)
            // > 1 (High randomness, less coherence)
            temperature: 0.7 
          })
        });
  
        const data = await response.json();
        const aiMessage = data.choices[0].message.content;
  
        responseEl.textContent = aiMessage;
      } catch (error) {
        responseEl.textContent = 'Error: No se pudo obtener respuesta del servidor';
        console.error(error);
      }
  
      promptInput.value = '';
    });
  });
  