var textInfo = [  
"<div>Genevieve Goffman, Installation view: <i>Here Forever</i>, Alyssa Davis Gallery, <div class='number'>2020</div></div>",
"<div>Genevieve Goffman, Installation view: <i>Here Forever</i>, Alyssa Davis Gallery, <div class='number'>2020</div></div>",
"<div><i>The Historian (Quintuplet)</i>, <div class='number'>2020</div>, Candelabra, Resin, <div class='number'>17</div> x <div class='number'>8</div> x <div class='number'>8</div> in.</div>",
"<div><i>The Historian (Quintuplet)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Historian (Quintuplet)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Station After (Black)</i>, <div class='number'>2020</div>, Resin, <div class='number'>3.5</div> x <div class='number'>7.5</div> x <div class='number'>8</div> in.</div>",
"<div><i>The Station After (Black)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Station After (Black)</i>, <div class='number'>2020</div>, detail</div>",
"<div>Genevieve Goffman, Installation view: <i>Here Forever</i>, Alyssa Davis Gallery, <div class='number'>2020</div></div>",
"<div><i>Democratic God</i>, <div class='number'>2020</div>, Nylon, Dye, <div class='number'>4</div> x <div class='number'>8</div> x <div class='number'>5</div> in.</div>",
"<div><i>Democratic God</i>, <div class='number'>2020</div>, Nylon, Dye, <div class='number'>4</div> x <div class='number'>8</div> x <div class='number'>5</div> in.</div>",
"<div><i>Democratic God</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Mining Incident (Yellow Edition)</i>, <div class='number'>2020</div>, Nylon, Dye, <div class='number'>8</div> x <div class='number'>3.5</div> x <div class='number'>4</div> in.</div>",
"<div><i>The Mining Incident (Yellow Edition)</i>, <div class='number'>2020</div>, Nylon, Dye, <div class='number'>8</div> x <div class='number'>3.5</div> x <div class='number'>4</div> in.</div>",
"<div><i>The Mining Incident (Yellow Edition)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Monument to a Hot Dead King (Purple Edition)</i>, <div class='number'>2020</div>, Nylon, Dye, <div class='number'>8</div> x <div class='number'>4.5</div> x <div class='number'>2.5</div> in.</div>",
"<div><i>Monument to a Hot Dead King (Purple Edition)</i>, <div class='number'>2020</div>, Nylon, Dye, <div class='number'>8</div> x <div class='number'>4.5</div> x <div class='number'>2.5</div> in.</div>",
"<div><i>Monument to a Hot Dead King (Purple Edition)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Monument to a Hot Dead King (Purple Edition)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Winter Commune (Pink Edition)</i>, <div class='number'>2020</div>, Nylon, Dye, <div class='number'>4.5</div> x <div class='number'>8</div> x <div class='number'>3.5</div> in.</div>",
"<div><i>The Winter Commune (Pink Edition)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Winter Commune (Pink Edition)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Winter Commune (Pink Edition)</i>, <div class='number'>2020</div>, detail</div>",
"<div>Genevieve Goffman, Installation view: <i>Here Forever</i>, Alyssa Davis Gallery, <div class='number'>2020</div></div>",
"<div><i>The Mining Incident (Magenta)</i>, <div class='number'>2020</div>, Steel, Uranium Glass, Blacklight, Resin, Acrylic Paint, <div class='number'>40</div> x <div class='number'>22</div> x <div class='number'>17.5</div> in.</div>",
"<div><i>The Mining Incident (Magenta)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Mining Incident (Magenta)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Mining Incident (Magenta)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Mining Incident (Magenta)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Mining Incident (Magenta)</i>, <div class='number'>2020</div>, Steel, Uranium Glass, Blacklight, Resin, Acrylic Paint, <div class='number'>40</div> x <div class='number'>22</div> x <div class='number'>17.5</div> in.</div>",
"<div>Genevieve Goffman, Installation view: <i>Here Forever</i>, Alyssa Davis Gallery, <div class='number'>2020</div></div>",
"<div>Genevieve Goffman, Installation view: <i>Here Forever</i>, Alyssa Davis Gallery, <div class='number'>2020</div></div>",
"<div><i>Monument to a Hot Dead King (Waterfall)</i>, <div class='number'>2020</div>, Water, Fish Tank, Spout, Blue Food Dye, Marble, PLA, Resin, Acrylic, Paint, <div class='number'>42.5</div> x <div class='number'>24</div> x <div class='number'>12.5</div> in.</div>",
"<div><i>Monument to a Hot Dead King (Waterfall)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Monument to a Hot Dead King (Waterfall)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Monument to a Hot Dead King (Waterfall)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Little Gorgon</i>, <div class='number'>2020</div>, Resin, Acrylic Paint, <div class='number'>24</div> x <div class='number'>17</div> x <div class='number'>22</div> in.</div>",
"<div><i>Little Gorgon</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Little Gorgon</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Little Gorgon</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Little Gorgon</i>, <div class='number'>2020</div>, Resin, Acrylic Paint, <div class='number'>24</div> x <div class='number'>17</div> x <div class='number'>22</div> in.</div>",
"<div>Genevieve Goffman, Installation view: <i>Here Forever</i>, Alyssa Davis Gallery, <div class='number'>2020</div></div>",
"<div><i>Forest Beyond the Ice and Snow</i>, <div class='number'>2020</div>, Vinyl, <div class='number'>66</div> x <div class='number'>42</div> in. (detail)</div>",
"<div><i>Forest Beyond the Ice and Snow</i>, <div class='number'>2020</div>, detail</div>",
"<div>Genevieve Goffman, Installation view: <i>Here Forever</i>, Alyssa Davis Gallery, <div class='number'>2020</div></div>",
"<div><i>The Winter Commune (City Split, Half 2)</i>, <div class='number'>2020</div>, Chessboard, Aluminum, Resin, Acrylic, Paint, <div class='number'>61</div> x <div class='number'>10</div> x <div class='number'>20.5</div> in.</div>",
"<div><i>The Winter Commune (City Split, Half 2)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Winter Commune (City Split, Half 2)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Winter Commune (City Split, Half 1)</i>, <div class='number'>2020</div>, Chessboard, Aluminum, Resin, Acrylic, Paint, <div class='number'>59</div> x <div class='number'>10</div> x <div class='number'>20.5</div> in.</div>",
"<div><i>The Winter Commune (City Split, Half 1)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Winter Commune (City Split, Half 2)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Winter Commune (City Split, Half 2)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Secret Guardians</i>, <div class='number'>2020</div>, Chessboard, Aluminum, Resin, <div class='number'>70</div> x <div class='number'>8</div> x <div class='number'>8</div> in.</div>",
"<div><i>Secret Guardians</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Reading Girl</i>, <div class='number'>2020</div>, Chessboard, Aluminum, PLA, Acrylic, Paint,<div class='number'>62</div> x <div class='number'>11</div> x <div class='number'>11</div> in.</div>",
"<div><i>The Reading Girl</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Reading Girl</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Tiktok (1)</i>, <div class='number'>2020</div>, Plexiglass, <div class='number'>72</div> x <div class='number'>36</div> in.</div>",
"<div><i>Tiktok (1)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Tiktok (1)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Tiktok (1)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Tiktok (1)</i>, <div class='number'>2020</div>, detail</div>",
"<div>Genevieve Goffman, Installation view: <i>Here Forever</i>, Alyssa Davis Gallery, <div class='number'>2020</div></div>",
"<div>Genevieve Goffman, Installation view: <i>Here Forever</i>, Alyssa Davis Gallery, <div class='number'>2020</div></div>",
"<div><i>The Station After (Pearl)</i>, <div class='number'>2020</div>, Resin, Acrylic Paint, Glass, Steel, Plexiglass, <div class='number'>4.5</div> x <div class='number'>10</div> x <div class='number'>10</div> in.</div>",
"<div><i>The Station After (Pearl)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Station After (Pearl)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Station After (Pearl)</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Station After (Pearl)</i>, <div class='number'>2020</div>, Resin, Acrylic Paint, Glass, Steel, Plexiglass, <div class='number'>4.5</div> x <div class='number'>10</div> x <div class='number'>10</div> in.</div>",
"<div><i>Platform to Babylon</i>, <div class='number'>2020</div>, Vinyl, Acrylic, <div class='number'>76</div> x <div class='number'>48</div> in.</div>",
"<div><i>Platform to Babylon</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Platform to Babylon</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Platform to Babylon</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Platform to Babylon</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Platform to Babylon</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Platform to Babylon</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Station Manager is a Chimera</i>, <div class='number'>2020</div>, Vinyl, Acrylic, <div class='number'>84</div> x <div class='number'>76</div> in.</div>",
"<div><i>The Station Manager is a Chimera</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Station Manager is a Chimera</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Station Manager is a Chimera</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Platform to Victory</i>, <div class='number'>2020</div>, Vinyl, Acrylic, <div class='number'>76</div> x <div class='number'>48</div> in.</div>",
"<div><i>Platform to Victory</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>Platform to Victory</i>, <div class='number'>2020</div>, detail</div>",
"<div>Genevieve Goffman, Installation view: <i>Here Forever</i>, Alyssa Davis Gallery, <div class='number'>2020</div></div>",
"<div><i>The Hourglass</i>, <div class='number'>2020</div>, Resin, Glass, Iron, Acrylic Paint, Plexiglass, Sand, <div class='number'>66</div> x <div class='number'>18</div> x <div class='number'>18</div> in.</div>",
"<div><i>The Hourglass</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Hourglass</i>, <div class='number'>2020</div>, detail</div>",
"<div><i>The Hourglass</i>, <div class='number'>2020</div>, detail</div>"
 ];


















