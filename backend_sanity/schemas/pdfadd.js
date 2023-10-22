const pdfadd={
    name: 'webPage',
    type: 'document',
    title: 'Web Page',
    fields: [
      {
        name: 'pdfFile',
        type: 'file',
        title: 'PDF File',
        options: {
          accept: '.pdf', 
        },
      },
    ],
  };

  export default pdfadd;