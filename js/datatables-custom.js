$(document).ready(() => {
    const csvFileInput = document.getElementById('csvFileInput');
    const downloadBtn = document.getElementById('downloadBtn');
    let dataTable;
  
    // Parse CSV and initialize DataTable
    csvFileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const data = results.data;
            loadTable(data);
          },
        });
      }
    });
  
    // Load data into the table
    function loadTable(data) {
      // Clear any existing table
      if (dataTable) {
        dataTable.destroy();
        $('#csvTable tbody').empty();
      }
  
      // Populate table headers dynamically
      const headers = Object.keys(data[0]);
      $('#tableHeader').empty();
      headers.forEach((header) => {
        $('#tableHeader').append(`<th>${header}</th>`);
      });
  
      // Populate table body
      data.forEach((row) => {
        const rowHtml = headers.map((header) => `<td>${row[header]}</td>`).join('');
        $('#csvTable tbody').append(`<tr>${rowHtml}</tr>`);
      });
  
      // Initialize DataTable
      dataTable = $('#csvTable').DataTable({
        dom: 'Bfrtip', // Add controls for filtering and exporting
      });
    }
  
    // Download filtered data as CSV
    downloadBtn.addEventListener('click', () => {
      const filteredData = dataTable.rows({ search: 'applied' }).data().toArray();
      const csv = Papa.unparse(filteredData);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'filtered_data.csv';
      a.click();
      URL.revokeObjectURL(url);
    });
  });
  