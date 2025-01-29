let currentPage = 1;

const content = [
    '<img class="cover" src="Cover.png" alt="cover image">',
    '<h1 class="center">Storielle Derp</h1><h2 class="center bottom">By Derpy P. and B.D.</h2>',
    '<h2 class="center">Capitolo 1</h2><div class="center">"sdhuzjfesjdk. Ehi, chi ha messo il mick sulla tastiera!?"</div>',
    '<div>Oggi sono andato da mia nonna e a fatto questa faccia quando a mangiato la muffa in scatola :P</div><br><div>Fine 1° capitolo</div>',
    
    '<h2 class="center">Cap(py)tolo 2</h2><div class="center">qwertyuioulyt ehi chi ha messo il doggo sulla tastiera? 2</div>',
    '<div>L\'anno scorso dal tecnico c\'era una auto(matico) tranzsphormerzs quando haveva premuto un tastino la auto(matico) mi guardò</div><br><div>FINNE 2 cap(py)tolo</div>',
    
    '<h2 class="center">Capitolo 3</h2><div class="center">"hEY CHI HA LASCIATO IL BLOCK MAIUSC????"</div>',
    '<div>Oggi sono andato dal dentis ta però è stato molto difficile perché NON CI ERA IL DENTISTA</div><br><div>:O Fine capitolo 3</div>',

    '<h2 class="center">Capitolo 4</h2><div class="center">"ahdusndiwasd wof wof wof wof wof wof wof. (Hey chi ha lasciato l\'umano sulla tastiera?)"</div>',
    '<div>Oggi sono stato a casa a fare cose casose e a ora di pranzo ò mangiatola la muffa in bottigla in un sol boccone. 5 stelle proprio consigliato</div><br><div>fine capotto capitolo 4</div>',
    
    '<h2 class="center">Capitolao 5</h2><div class="center">"hEy, a chil agga la tastiera?"</div>',
    '<div>Oggi derpy can uwuw sta adnando al deserto, magari mi prende un gelato alla muffa in scatola (il mio gusto preferito) dai speriamo</div><br><div>fine il lag 5</div>',
    
    '<h2 class="center">CAAPITOLOL 6</h2><div class="center">"Che titolo ci metto?"</div>',
    '<div>OGGI SONO ANDATO A 271 -817 E ALLA FINE DEPOT CHANNEL NON ME LA DATO IL GELATO ALLA MUFFA IN SCATOLA E ALLORA CI SONO ANDATO DA SOLO. A DEPOT CI METTO 2 STELLE DI DAVID E MEZZO >:(</div><br><div>FINE CAPITOLO &</div>',
    
    '<h2 class="center">CAPITOLARO 7</h2><div class="center">"Wow, finalmente un capitolo che ha le scritte centrate"</div>',
    '<div>OGGI.................... HO NOTATO CHE NON AVERE NESSUN PIOMBO. IO VOLERE PIOMBO. IO VOLERE PIOMBO PER SUPER SPEEDY HIGHWAY. TUTTI VOLERE PIOMBO PER SUPER SPEEDY HIGHWAY. E TROPPO BIANCA LA LUCE</div><br><div>FINE CAPITOLARE 7</div>',
    
    '<h2 class="center">CAPPOTTO (7+2)-1</h2><div class="center">"MARIO CARTA MA CON LE BARCHE"</div>',
    '<div>OGGI DEPOSITO HA PRESO IL MIO BUS E NON LH\'A RESTITUITUTO TROPPO BRUTTO DERPOTTOGIOCAZ17. MO LO MOO MOO MEDEOUS. :((((((((((((((((((((((((((((((((((((((((((((((((((((((</div><br><div>fine deposito 8</div>',
    
    '<h2 class="center fancy-text">Capitolo 9</h2><div class="center fancy-text">"il capitolo con il font fancy"</div>',
    '<div class="fancy-text">Oggi sono molto triste perché ceruleannonononosusaddderpp, da 3 anni che abbiamo sto mondo, da 3 anni!! ancora non mi ha dato la muffa in lattina!!</div><br><div class="fancy-text">fine capitolo smancy</div>',
    
    '<h2 class="center">Capitolo 0arcsin(1/2)+10arcsin(3sqrt(3)/2)+1-1</h2><div class="center">IL CAPITOLO DI CERU >:3</div>',
    '<div>MWAHAHAHHA HO SIA IL TUO LIBRO (ci sto scrivendo sopra) CHE LA TUA MUFFA IN SCATOLA, SE LA VUOI DEVI PRIMA, prima... uhmmm uhh</div><br><div>non lo so</div><div>PERÒ HO LA TUA MUFFA E NON LA AVRAI MAI MAAI HAHAHAHAHAAH</div>',
    
    '<h2 class="center">Capitolo 11</h2><div class="center">"Trails and Trials chambersz"</div>',
    '<div>1.21! wowi zowi mowi lowi gowi kowi kiwi! ai miei tempi si stava alla 1.20.1.21. also hanno ridotto la distanza a cui si sente. also i componetns sono un po stupidi perché non è bello il find a tri forza e poo, ora derpo vuole un latest.log.tar.gz? e ora vuole rimodellare la base?? finskibidi 11</div>',
    
    '<h2 class="center">Capitolo 12</h2><div class="right-align">"eh che cavolo ora allinei all\'inizio cioè, ma"</div>',
    '<div class="right-align">oggi stavo       derpoperopo e io      stavomo (uomo) lui        e\' donna dama lol   checkers. derpo boh   non so spiegare cioè     sembrava così silly       cioè ma hahahihihi                     uoman.</div><br><div class="right-align">fine     capitolo      12</div>',
    
    '<h2 class="center">Capitolo 13</h2><div class="center">"lavati le mani"</div>',
    '<div>oggi sono moktlo triste perchù ceruleaoderpn è si arrabiato ocon me eminem solo perché derpo non gli piace lavarsi il corpo perche non gli piaciono i calderoni e non gli piace niente e non gil piace la lava boh</div><br><div>fine capitolo 13</div>',
    
    '<h2 class="center">capitolo 14</h2><div class="center">2il capitolo dove non premo shift2</div>',
    '<div>oggi creudepor stava facendo una di quelle seu farm automaitiche nerd 🤓🤓🤓🤓 quando ppoi mi ha chiesto di fare 2 crafters e non ho usato il crafing crafters crafing e quindi sono molto silly</div><br><div>fine capitolo 14</div>',
    
    '<h2 class="center">capitolo 15</h2><div class="center">"skeleton apoca\'lips 👄"</div>',
    '<img src="skeletonapocalips.png" alt=""><br><div>fine capitolo 15</div>',
    
    '<h2 class="center">Capitlol 16</h2><div class="center">"silly goober ;3~"</div>',
    '<div>hehe che funny goob haha. la meloni farm cioì perch\'e l\'ha messo così in bassoi nbece di metterla pi+ in alto cos inon la dovevamo ↑\'are più in sopra.</div><div>arrab.</div><br><div>fine capitolo 16</div>',
    
    '<h2 class="center">Capitolo 17</h2> <div class="center">"ohohooho derpo ora l\'ahi fatta aglia"</div>',
    '<div>OH NO ORA HO LETTO IL CAPITLOO 0arcsin(1/2)+10arcsin(3 sqrt(3)/2)+1-1 (non lo calocol) E HO SCOPERTO CHE DEPOT NON MI VUOLE DARE LA MUFFA IN SCATOLA LUI É TROOPPO CATTIVO E VOGLIO LA MUFFA QUINDI DERPO, SE LEGGI QUESTO, SAI CHE IO TI</div> <br> <div>fine capitolo 17</div>',

    '<h2 class="center">Capitolo 18</h2> <div class="center">"tricky trails and atails"</div>',
    '<div>oh no no no i am fading away perché mo piango 🥔🥔🥔 potato e poi creator musicbox ah comunquq derpo oggi e io oggi siami andati a le trail ruins chambers (nome,secondonome,cognome) e wow ora ho la mia lo betsy wow ah e comunque come che nei ultimi capitol isto alla fine 18</div> <br> <div>fine capitolo 18</div>',

    '<h2 class="center">C(erulean)apitolo</h2> <div class="center">D(playz)iciannove (19)</div><br><div>Il capitolo d(erpo)i d(p)p</div>',
    '<div>h eyson odp es to scrivend oun bel capitolo vaia vederei lm io sito derpy.place tyty muah *bacio alla francese sulle guancie*</div><div>𝒻𝒾𝓃</div><div class="center">===================</div><div>Il capitolo 19 è sponsorizzato da derpy.place</div><div>derpy.place: il sito più</div>',

    '<h2 class="center">capitototos 20</h2> <div class="bottom">il capitolo dove sono</div>',
    '<div>Yay! Sono un fantasmino! Una bella fatina che svolazza come Derulean! Hihihihihihi *fox noises perché derpo*)! Hello Mario! (pls leggilo con al voec di crisps rats) e comunque hey derpo lookin good</div> <br> <div>fine capitolo 17</div>',

    '<h2 class="center">capitolo boh non lo so emoji emoji cry cry :=</h2> <div class="bottom">il capitolo dove boh sono silly (p. 21)</div>',
    '<div>heahahaha bog bogged non so cosa screibere in quwewos captiolo boh strano che numero di captolo era? non l\'ho ricordo! ora checko la foot age. turns out hce siamo a 21 wow 2021 anno mediocre insieme al 2025, anno perggioer di tutti, cioè comme che il 2025 toilet fine capitolo 21</div>'
];

function updatePage() {
    document.getElementById("content").innerHTML = content[currentPage - 1] || "No content available.";

    if (currentPage === 1) {
        document.getElementById("pageNumber").innerText = "";
    } else if (currentPage === 2) {
        document.getElementById("pageNumber").innerText = "";
    } else {
        document.getElementById("pageNumber").innerText = currentPage - 1;
    }

    // Scroll to the top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.getElementById("nextButton").addEventListener("click", () => {
    if (currentPage < content.length) {
        currentPage++;
        updatePage();
    }
});

document.getElementById("prevButton").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
});

updatePage();
