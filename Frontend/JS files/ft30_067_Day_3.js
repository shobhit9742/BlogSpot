var colors = ['white', '#feedc9', '#ebf7f5', '#e2e9f0', '#f4f7eb', '#e0efd1', '#f8d4f5'];
        var index = 0;
        var secboxes = document.getElementsByClassName("secbox");
        var colorbox = document.getElementsByClassName("colorcard");
        setInterval(function () {
            for (var i = 0; i < secboxes.length; i++) {
                secboxes[i].style.backgroundColor = colors[index];
                colorbox[i].style.backgroundColor=colors[index];
            }
            index = (index + 1) % colors.length;
        }, 4000);