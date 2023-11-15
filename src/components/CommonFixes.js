import React, { useRef, useState } from 'react'
import fixesOne from '../img/fixes-1.jpeg'
import fixesTwo from '../img/fixes-2.jpeg'
import fixesThree from '../img/fixes-3.jpeg'
import fixesFour from '../img/fixes-4.jpeg'
import fixesFive from '../img/fixes-5.jpeg'
import fixesSix from '../img/fixes-6.jpeg'
import fixesSeven from '../img/fixes-7.jpeg'
import fixesEight from '../img/fixes-8.jpeg'
import fixesNine from '../img/fixes-9.jpeg'

const CommonFixes = () => {

  const close = () => {
    const content = document.querySelector('.cards-content');
    content.style.left = '-2000px'

  }

  const [chosenCard, setChosenCard] = useState('engine');
  const contentRef = useRef(null);

  const choseCard = (card) => {
    // const content = document.querySelector('.cards-content')
    if (contentRef.current) {
      const computedStyle = window.getComputedStyle(contentRef.current);
      if (computedStyle.position === 'absolute') {

        console.log('done')
        contentRef.current.style.left = '0px';
      }
    }
    setChosenCard(card);
  }




  return (
    <div className='fixes'>
      <div className="fixes-container">
        <div className="cards-div">
          <div className="fixes-card">
            <div className='fixes-bg'>
              <div onClick={() => choseCard('engine')} className="fixes-card-inner">
                <img src={fixesOne} alt="" />
                <div>
                  <h2>Engine</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="fixes-card">
            <div className="fixes-bg">
              <div onClick={() => choseCard('bearings')} className="fixes-card-inner">
                <img src={fixesTwo} alt="" />
                <div>
                  <h2>Bearings</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="fixes-card">
            <div className="fixes-bg">
              <div onClick={() => choseCard('exhaust')} className="fixes-card-inner">
                <img src={fixesThree} alt="" />
                <div>
                  <h2>Exhaust</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="fixes-card">
            <div className="fixes-bg">
              <div onClick={() => choseCard('wheels')} className="fixes-card-inner">
                <img src={fixesFour} alt="" />
                <div>
                  <h2>Wheels</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="fixes-card">
            <div className="fixes-bg">
              <div onClick={() => choseCard('chain')} className="fixes-card-inner">
                <img src={fixesFive} alt="" />
                <div>
                  <h2>Chain</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="fixes-card">
            <div className="fixes-bg">
              <div onClick={() => choseCard('wiring')} className="fixes-card-inner">
                <img src={fixesSix} alt="" />
                <div>
                  <h2>Wiring</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="fixes-card">
            <div className="fixes-bg">
              <div onClick={() => choseCard('suspension')} className="fixes-card-inner">
                <img src={fixesSeven} alt="" />
                <div>
                  <h2>Suspension</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="fixes-card">
            <div className="fixes-bg">
              <div onClick={() => choseCard('carburetor')} className="fixes-card-inner">
                <img src={fixesEight} alt="" />
                <div>
                  <h2>Carburetor</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="fixes-card">
            <div className="fixes-bg">
              <div onClick={() => choseCard('steering')} className="fixes-card-inner">
                <img src={fixesNine} alt="" />
                <div>
                  <h2>Steering</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-content" ref={contentRef}>
          <button onClick={() => close()} className='close-content'>X</button>
          {chosenCard === 'engine' ? (
            <div>
              <h3>Engine</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium perspiciatis dicta dolorem! Obcaecati quia laborum similique ea blanditiis ex voluptas illo deserunt omnis, placeat quod esse quasi quam mollitia, dignissimos consectetur laboriosam sint. Fugit harum saepe officia accusamus maxime quas, totam in amet ipsa reiciendis laboriosam odio. Repudiandae minus repellendus quo fuga nobis possimus vel, suscipit illo eaque corporis voluptate! Molestias voluptas eum veniam repudiandae odio soluta voluptate ipsa voluptatibus nihil amet aliquid consequuntur hic, quo in at enim, quos quam fugiat deserunt dolor vero aperiam? Aspernatur laudantium, porro id ut earum saepe, ea recusandae perferendis nam, nostrum quaerat!</p>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit accusantium possimus odit, dolorem temporibus inventore magni explicabo quaerat minima impedit laboriosam nobis, perferendis aspernatur commodi, officiis modi molestiae nulla nemo fugit officia eius facere vitae et. Nostrum maiores possimus eveniet aliquid amet aspernatur facilis impedit quae a quidem adipisci fugit ad neque, voluptate optio dolorum laborum cumque architecto? Mollitia assumenda aspernatur ducimus odio inventore ullam cumque esse eum, eos libero quam distinctio repellendus deserunt ex minima. Sed deserunt, perspiciatis natus harum possimus ipsam corrupti accusamus consequuntur rem perferendis fugit autem? Laudantium provident debitis temporibus repellat maiores, vel doloribus dicta ipsa!</p>
              <ul>
                <li>
                  <h3>Lorem.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam dicta non possimus. Eius inventore porro eaque pariatur assumenda odit ducimus saepe? Quo, neque labore. Corporis maiores inventore odio debitis!</p>
                </li>
                <li>
                  <h3>Lorem.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam dicta non possimus. Eius inventore porro eaque pariatur assumenda odit ducimus saepe? Quo, neque labore. Corporis maiores inventore odio debitis!</p>
                </li>
                <li>
                  <h3>Lorem.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam dicta non possimus. Eius inventore porro eaque pariatur assumenda odit ducimus saepe? Quo, neque labore. Corporis maiores inventore odio debitis!</p>
                </li>
              </ul>
            </div>
          ) :
            chosenCard === 'bearings' ? (
              <div>
                <h2>Bearings</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas doloremque incidunt dicta delectus, quasi tempore dolor nihil mollitia perspiciatis, maiores non quae. Magnam, reprehenderit cum repudiandae soluta provident laudantium sed totam nihil? Consequuntur in fugiat sequi accusamus sed nobis fugit? Ratione modi optio quasi. Accusantium voluptatum harum perferendis dicta tempore debitis. Quae corrupti modi incidunt praesentium maxime expedita, tenetur, molestiae harum cupiditate temporibus consequuntur, perferendis adipisci dolore labore facilis quod odit vero neque maiores amet! Saepe nulla labore deserunt corrupti. Omnis, eaque. Nesciunt cum, porro exercitationem earum mollitia illum odio, quidem autem eum magnam esse molestiae repudiandae quibusdam et beatae, commodi in quo corporis placeat quam asperiores nam dolor sint velit. Fuga excepturi tempora tempore obcaecati nobis, commodi a recusandae quisquam minus expedita aperiam. Aut totam, harum veniam, minima vero quae corporis animi ratione repellat rem ducimus facilis unde voluptatum! Illum officia quo, in quia soluta pariatur veritatis quam quibusdam sed exercitationem recusandae, doloribus quisquam distinctio. Ut ipsa, explicabo eligendi, architecto velit odit, quae dolore consequatur dolorem qui nam. Ex nulla doloribus amet consectetur necessitatibus explicabo quas laudantium accusamus aut, ducimus rem excepturi voluptas repudiandae ab sunt odio, nobis sequi nihil quis corrupti? Possimus, ipsam excepturi quod natus sapiente in?</p>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque rem saepe rerum voluptas voluptate id, odit perferendis ut neque placeat!</p>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque rem saepe rerum voluptas voluptate id, odit perferendis ut neque placeat!</p>
              </div>
            ) :
              chosenCard === 'exhaust' ? (
                <div>
                  <h2>Exhaust</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad omnis, nobis laudantium cum recusandae quisquam rem odio quam molestiae facere veritatis sequi eum deserunt doloribus maxime! Rerum dolor magni cumque minima doloribus quod unde, dolore quis deserunt provident assumenda rem deleniti optio eos odio minus impedit ducimus consequuntur dolores reiciendis id tempore vitae numquam quas. Voluptates praesentium exercitationem in, excepturi, animi eius dolorem iusto, ad eligendi labore facere? Hic, dolorem.</p>
                  <br />
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maiores amet architecto ipsum dolorem necessitatibus porro fugit atque earum iusto, sit nam neque perferendis suscipit fuga beatae temporibus quod, reiciendis ex modi. Dignissimos vero accusamus animi nostrum dolorem, officiis sapiente, error nulla repellat quas corporis unde corrupti. Vel, error ea?</p>
                  <br />
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque harum dicta repudiandae quam esse sint corrupti distinctio ullam molestiae aliquam, ad possimus temporibus amet hic? Iusto eligendi laborum beatae!</p>
                </div>
              ) :
                chosenCard === 'wheels' ? (
                  <div>
                    <h3>Wheels</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint fugiat adipisci reprehenderit voluptate blanditiis deserunt ipsa aperiam debitis eaque fugit culpa, voluptatem ipsam neque ipsum nemo, temporibus quia fuga illo, laudantium earum error quae obcaecati odit. Distinctio natus, quas rem beatae voluptate maxime soluta recusandae deleniti enim tenetur velit omnis cumque quam optio obcaecati ad. Consectetur delectus laudantium inventore facere magni optio, cupiditate iure, molestias nobis aperiam incidunt saepe dolor quasi commodi. Exercitationem odio aspernatur cupiditate architecto delectus rerum itaque consectetur, tempora soluta dolore ad sed in voluptatibus optio alias qui sunt, et culpa ea, placeat fugit voluptatum at vero.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloribus odit laboriosam, reprehenderit saepe, odio tenetur vitae dolore a tempora vero nulla nobis repellendus placeat repellat voluptate ea sint tempore labore omnis veniam! Rem aperiam sapiente animi similique omnis placeat voluptas est. Ut recusandae dolorum cum possimus. Cum, eligendi labore!</p>
                  </div>
                ) :
                  chosenCard === 'chain' ? (
                    <div>
                      <h3>Chain</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab et aliquid at sit nisi quasi consequatur temporibus itaque deserunt praesentium, pariatur illum assumenda tenetur, quia maxime molestiae quibusdam nobis nostrum.</p>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam soluta laboriosam eveniet similique doloribus repudiandae sint! Excepturi saepe nihil exercitationem sed harum alias, illum necessitatibus nemo laborum ab fuga consequatur veritatis suscipit quasi officia in eaque obcaecati amet qui dolorem id labore? Quia, exercitationem numquam. Nihil excepturi dolorum nemo qui!</p>
                      <br />
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nemo dicta quae est odio officia quibusdam voluptatibus, quasi necessitatibus mollitia at? Accusamus, illum fugiat! Reprehenderit ullam, ipsam dolorem odit in harum expedita similique repellat natus velit, obcaecati ducimus veniam consequuntur aut quod error. Repudiandae numquam iste quas, praesentium voluptatibus ut odio ratione laboriosam, fugit autem soluta maiores placeat necessitatibus rem repellat provident sint? Voluptatem incidunt, cumque deleniti tempora similique beatae.</p>
                    </div>
                  ) : chosenCard === 'wiring' ? (
                    <div>
                      <h3>Wiring</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde repellat ullam consequuntur accusamus quis inventore veniam saepe! Error, provident non? Quia velit quos ratione eaque libero sunt unde! Veritatis autem nihil consequatur error, nisi architecto. Recusandae repellat magnam eum, rerum ut nihil tenetur ab magni? Numquam, quaerat totam explicabo eum, dolorum earum odit et temporibus quia eos repudiandae fugit dignissimos? Exercitationem odit dolores quae neque deserunt blanditiis facilis qui repellendus molestias, sit ullam aspernatur deleniti cum expedita? Quas nostrum illo iusto quisquam eum amet dicta est in animi? Velit iusto eaque quasi dolores error placeat, laudantium ducimus nobis? Possimus, quisquam. Voluptatibus accusantium corporis quaerat, quisquam, sed laudantium praesentium obcaecati maiores vel assumenda placeat enim quidem eos laboriosam distinctio repellat deserunt expedita beatae reiciendis a nihil provident facere, explicabo hic! Consequuntur ducimus soluta dolores delectus enim earum nesciunt, eius nihil in quia optio sunt vel molestias quae harum quasi odit.</p>
                      <br />
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis eius tenetur sed laudantium! Natus, quisquam. Beatae officiis voluptates tempora, vero commodi quaerat veniam, numquam quasi vitae est tenetur. Enim, natus?</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, tempora! Saepe aliquam, ex odit deleniti, iusto quidem repudiandae, voluptas alias consectetur porro nobis quia maiores qui! Quam expedita fugit illum non maxime atque consequatur! Nihil enim quis fugiat reprehenderit pariatur molestias alias atque aspernatur quisquam iure ipsa minima deserunt culpa, nostrum ex soluta aliquid possimus obcaecati. Aliquid optio voluptas sint soluta. In, cumque placeat, repellendus iure similique aliquam obcaecati vitae veritatis autem sapiente officiis dolor ipsam cupiditate quidem provident suscipit ab. Fugit a alias, corporis hic consequatur quae aliquam corrupti nisi quo provident numquam doloribus repellendus eius et. Dolore, voluptatem incidunt fuga nostrum quidem et, eveniet quaerat ullam soluta cum asperiores laboriosam numquam? Suscipit corrupti perspiciatis odio ipsa maiores, magnam numquam nobis error dolores! Eius nostrum doloremque, saepe provident ipsa neque minima quisquam recusandae consectetur officiis perspiciatis esse. Rerum placeat iste possimus veniam repellendus ad tempore. Ut molestiae, ullam rerum quaerat aperiam explicabo officia porro dolores beatae, accusantium expedita accusamus, hic tempora quibusdam temporibus ipsam voluptatem error eos sequi. Ipsum, quia tempore? Totam, laborum quasi neque beatae saepe commodi aut quaerat voluptas. Voluptas eum officia omnis aliquam exercitationem cumque expedita similique voluptatem aliquid rem, dolor ut dolores natus temporibus! Impedit.</p>
                    </div>
                  ) : chosenCard === 'suspension' ? (
                    <div>
                      <h3>Suspension</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel expedita est natus molestiae fugiat earum inventore accusantium nobis, sapiente recusandae? Quia voluptatum incidunt obcaecati aspernatur neque perferendis id eum omnis assumenda natus veritatis deserunt corrupti quo nisi nemo ut tempora nulla ratione, quasi labore, doloribus exercitationem, accusantium quibusdam! Officiis natus ea ipsa inventore! Totam quasi adipisci eligendi illum numquam, suscipit debitis pariatur dolores blanditiis exercitationem sapiente qui nisi iure odit, quam repudiandae, amet molestiae enim nihil. Commodi maiores repudiandae eius itaque quae veniam? Enim laudantium odio aliquid odit praesentium explicabo ipsa saepe, nemo nesciunt dolor quo, maxime eius culpa inventore perspiciatis vitae incidunt tempora velit. Fuga nam, sequi quasi quas, quia voluptas laudantium doloremque illum iste dignissimos eos similique eveniet autem hic deserunt voluptatem, vero ipsum pariatur cupiditate consequatur debitis? Atque aspernatur reiciendis dolores veritatis exercitationem id, placeat pariatur molestias aliquam est magni numquam, iste neque veniam eaque iure deserunt, voluptate quo omnis? Provident quibusdam magnam aliquid voluptatibus impedit suscipit labore voluptatum, error, ipsam quas libero facilis! Expedita, esse dolore excepturi nesciunt provident fugit unde quisquam magnam delectus eum hic, odit quam repellat modi fuga recusandae quidem, ad accusamus amet aliquam quod! Rem placeat ipsam ducimus quidem vitae, tenetur amet blanditiis perferendis eum sunt dolore quam culpa saepe sint molestiae laboriosam cupiditate quaerat vero doloribus libero ipsa quo? Quisquam expedita ipsa doloribus! Quod atque explicabo, esse cupiditate consequuntur dolorem voluptatem, recusandae enim provident unde doloremque quis quaerat sequi dolores suscipit numquam corporis assumenda a qui? Qui fugit mollitia asperiores voluptates alias? Autem quam accusamus quidem optio quae culpa sequi odio deserunt voluptas ut blanditiis voluptatem, maxime harum fugit impedit iure laboriosam libero pariatur adipisci beatae voluptatum soluta quisquam! Ullam temporibus eos totam veritatis sint fugit quis labore sunt quisquam laboriosam nisi, placeat nesciunt omnis saepe culpa consequuntur illo maxime autem?</p>
                    </div>
                  ) : chosenCard === 'carburetor' ? (
                    <div>
                      <h3>Carburetor</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corporis eligendi, alias dolore perferendis ratione, ex adipisci, odit ipsum facilis nostrum vitae perspiciatis. Suscipit unde tempora repudiandae repellat similique tempore!</p>
                      <ul>
                        <li>
                          <h3>Lorem ipsum dolor sit.</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit ratione nulla odio deleniti distinctio aspernatur, perferendis tenetur nihil error!</p>
                        </li>
                        <li>
                          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aut possimus maxime, corporis asperiores, fugit alias, ea perferendis eligendi aperiam cumque. Cum, architecto nemo unde quisquam neque adipisci dignissimos inventore fuga laudantium, modi, quidem tenetur? Quo, quam repellat eveniet nulla voluptatum illo neque veniam! Vel porro laudantium tenetur minus nihil!</p>
                        </li>
                        <li>
                          <h3>Lorem, ipsum.</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati omnis perferendis beatae explicabo eum quas nam officiis perspiciatis sit.</p>
                        </li>
                      </ul>
                    </div>
                  ) : chosenCard === 'steering' ? (
                    <div>
                      <h3>Steering</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, autem eaque doloremque repudiandae ducimus animi odit perferendis quae odio nulla sapiente? Illum ipsa voluptatem ad ullam id maxime similique alias.</p>
                      <br />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nam dolorum? Aperiam laboriosam libero corporis sequi quas deserunt error. Ratione iure ipsa voluptates beatae distinctio, iste explicabo voluptatum reiciendis quaerat omnis quia expedita eum corporis architecto ipsam excepturi, totam alias! Est, nesciunt numquam. Veniam eos sunt debitis. Facilis odit consequatur vitae iusto voluptatibus quidem nemo repellat minus error maxime deserunt, cum consequuntur recusandae, quis omnis. Fugiat in, corporis hic distinctio quae, dolorem asperiores enim molestiae omnis quod tenetur velit quas! Eum debitis magnam culpa quisquam aliquid at nam aperiam praesentium.</p>
                    </div>
                  )
                    : ''}
        </div>
      </div>
    </div>
  )
}

export default CommonFixes
