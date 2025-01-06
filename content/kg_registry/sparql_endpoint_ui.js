$(document).ready(function () {

    const yasgui = new Yasgui(document.getElementById("yasgui_div"), {
        requestConfig: {endpoint: "https://api.dev.kgi.services.base4nfdi.de"},
        copyEndpointOnNewTab: false,
        resizeable: true,
        autofocus: true,
    });

    // Fetch from the backend synchronously
    fetch('http://localhost:3000/query_examples')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const query_encoded = encodeURIComponent(item.query_syntax);
                const example_li = $(`<li><a id="query_${item.example_id}" class="dropdown-item">${item.query_name}</a></li>`).on('click', function () {      // Attach click event to this list item
                    tab = yasgui.addTab(
                        true, // set as active tab
                        {name: `${item.query_name}`}
                    );
                    tab.setQuery(item.query_syntax);
                    tab.query();  // Execute the query
                });

                $('#examples_ul').append(example_li);
            });

        })
        .catch(error => console.error('Error fetching users:', error));
})