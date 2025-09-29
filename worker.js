
    const worker = new Worker('worker.js');

    fetch('/index.html')
      .then(response => response.text())
      .then(htmlContent => {
        worker.postMessage({ type: 'html', content: htmlContent });
      })
      .catch(error => console.error('Error fetching HTML:', error));

    self.onmessage = function(event) {
      if (event.data.type === 'html') {
        const htmlTemplate = event.data.content;
        console.log('Opened Bloxcraft Game Hub :', htmlTemplate);
      }
    };
