import React from "react";

import classes from './Gabinet.module.css'

import gabinet from '../../../img/gabinet1.jpg'
import gabinet2 from '../../../img/gabinet2.jpg'

const GabinetMasazu = (props) => {

  return (
    <div>
      <div className={classes.container}>
        <img className={classes.img} src={gabinet} alt="??" />
        <div className={classes.centeredText}>
          GABINET USG
        </div>
      </div>
      <div className={classes.address}>
        <h4>Adres:</h4>
        Gabinet USG
        <br />ul.Wysoka 2, Oświęcim
        {/* dodanie mapki, to nie ejst żaden problem... */}
      </div>
      <div className={classes.secound}>
        <img className={classes.img} style={{ width: "30%" }} src={gabinet2} alt="??" />
        <div className={classes.textRezerwacja}>
          Rezerwacja: <br />
          tel: +48 121 212 121 <br />
          email: usg@usg.pl
        </div>
      </div>
      <div>
        ZDROWIE, URODA & RELAKS
        Poniżej przedstawiamy przykładowe zastosowanie naszych masaży.

        <div class="grid">

          <div id="layers-widget-column-37-853" class="layers-masonry-column layers-widget-column-853 span-4  first  column ">
            <div class="media image-top medium">
              <div class="media-body text-left">
                <h5 class="heading">Dla ZDROWIA:</h5>
                <div class="excerpt"><ul><li>bóle pleców, karku</li><li>stres,</li><li>zmęczenie,</li><li>terapie przeciwobrzękowa</li><li>rewitalizacja po porodzie</li><li>sportowe</li><li>oczyszczające</li><li>dla kobiet ciężarnych</li></ul></div>
              </div>
            </div>
          </div>

          <div id="layers-widget-column-37-710" class="layers-masonry-column layers-widget-column-710 span-4    column ">
            <div class="media image-top medium">
              <div class="media-body text-left">
                <h5 class="heading">Dla URODY:</h5>
                <div class="excerpt"><ul><li><strong>Japoński Masaż Twarzy (KOBIDO, liftingujący)</strong></li><li>antycelluitowe</li><li>wspomagające odchudzanie</li><li>modelujące,</li><li>ujędrniające,</li><li>bańką chińską</li></ul></div>
              </div>
            </div>
          </div>

          <div id="layers-widget-column-37-981" class="layers-masonry-column layers-widget-column-981 span-4  last  column ">
            <div class="media image-top medium">
              <div class="media-body text-left">
                <h5 class="heading">Dla RELAKSU:</h5>
                <div class="excerpt"><ul><li>masaż głowy</li><li><strong>Japoński Masaż Twarzy (KOBIDO, liftingujący)</strong></li><li>antystresowe,</li><li>odprężające,</li><li>wyciszające,</li><li>Idealne na bezsenność</li><li>ciepłym olejem</li></ul></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default GabinetMasazu;