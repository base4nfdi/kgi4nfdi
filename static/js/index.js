let yasgui;
let yasgui_options;

$(document).ready(function () {
  yasgui_options = {
    requestConfig: {endpoint: ""},
    copyEndpointOnNewTab: false,
    resizeable: true,
    autofocus: true,
  }
  yasgui = new Yasgui(document.getElementById("yasgui_div"), yasgui_options);

})

function execute_example_query(btn_obj) {
  const query_path = btn_obj.getAttribute("data-query_path");
  // Either read data-query_label or the text from the link
  const query_name = btn_obj.getAttribute("data-query_label") || btn_obj.textContent;

  $.ajax({
    url: query_path,
    method: 'GET',
    success: function (data) {
      // Create the new tab
      const tab = yasgui.addTab(true, { name: query_name });
      // Set query and endpoint
      tab.setQuery(data);
      tab.setEndpoint(btn_obj.getAttribute("data-backend"));
      // Execute
      tab.query();
    },
    error: function (xhr, status, error) {
      console.error('Error loading query:', error);
    }
  });
}
