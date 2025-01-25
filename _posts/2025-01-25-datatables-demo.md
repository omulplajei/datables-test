---
title:  "Demo for CSV dataset"
published: true
permalink: datatables.html
summary: "This is a demo of using sorting & downloading on a CSV dataset."
tags: [csv]
---

<link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">

<h1>CSV Data Viewer</h1>
  <input type="file" id="csvFileInput" accept=".csv" />
  <button class="btn btn-primary btn-space" id="downloadBtn">Download Filtered Data</button>
  <table id="csvTable" class="display" style="width:100%">
    <thead>
      <tr id="tableHeader"></tr>
    </thead>
    <tbody></tbody>
  </table>

  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js"></script>
  <script src="js/datatables-custom.js"></script>