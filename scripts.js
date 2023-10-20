/* Place your JavaScript in this file */
function myFunction(){
    var code = document.getElementById("code").value;
    // Create a Map (Named Data but shorter)
    const d = new Map();

    // Set Map Values
    d.set("333", 'https://monkeytype.com/');
    d.set("16", 'PutterOnEarth');
    d.set("34", 'https://www.youtube.com/shorts/DdkpRuD3WcA');
    d.set("69", "think fast chuck");
    d.set("146", 'copy and paste this to make your friend feeling SuS ');
    d.set("186", 'super sus');
    d.set("385", 'super sus (gurl voice bruh)');
    d.set("984", 'Lol &#128525;&#128069;&#128525;&#128069;&#128525;&#128069;&#128525;&#128069;&#128525;&#128069;&#128525;&#128069;&#128525;&#128069;&#128525;&#128069;&#128525;&#128069;&#128525;&#128069;&#128525;&#128069;&#128525;&#128069;&#128525;&#128069;');
    d.set("Lol52", '69*69-1024')
    d.set('3737', 'goggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggog2481goggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggog1442goggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggog')
    d.set("2481", 'epic super SuS video (Legendey rank )');
    d.set("1442", 'the next conclusion ?????');
    let test = parseInt(code);
    function linkopen(x){
    const link = document.getElementById('link');
    let clikc = d.get(code);
    link.setAttribute('href', clikc);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    link.innerHTML = x;
    }
    if (test < 500 && test > 300){
        linkopen("YOU GOTTA TYPE! -Putter")
    }else{
        document.getElementById("demo").innerHTML = d.get(code);
    }
}
