var cTemplate = Template7.compile("<p>This is a sample for dynamic text: {{title}}</p>")

function showSample(title) {
    document.getElementById("app").innerHTML = cTemplate({title: title})
}