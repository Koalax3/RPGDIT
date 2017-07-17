            function loadScript(location) {
                // Check for existing script element and delete it if it exists
                var js = document.getElementById("index");
                if(js !== null) {
                    document.body.removeChild(js);
                    console.info("---------- Script refreshed ----------");
                }

                // Create new script element and load a script into it
                js = document.createElement("script");
                js.src = location;
                js.type= "text/babel";
                js.id = "index";
                document.body.appendChild(js);
                js.onload;
                js.onreadystatechange;
            }