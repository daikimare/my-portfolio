// module
import Link from 'next/link'
import Image from 'next/image'

// component
import Layout from '../components/Layout'

export default function Introduction() {
  return(
    <Layout pageTitle="about me">
      
      <div className=" relative md:px-36 ">
        
        <div className="flex items-center justify-center px-3 py-16 md:justify-evenly md:py-24 md:px-6">
          <Image
            src="/icon/maresuke-ico.jpg"
            width="300"
            height="300"
            alt="maresuke-ico"
            className=" rounded-full "
          />
          <table className=" text-xl md:text-3xl "><tbody>
            <tr>
              <td className=" text-right ">Name:</td>
              <td className=" text-center text-xs font-semibold md:text-3xl md:px-5 md:py-2 ">Daiki Fukushima</td>
            </tr>
            <tr>
              <td className=" text-right ">Nickname:</td>
              <td className=" text-center text-xs font-semibold md:text-3xl md:px-5 md:py-2 ">maresuke</td>
            </tr>
            <tr>
              <td className=" text-right ">Age:</td>
              <td className=" text-center text-xs font-semibold md:text-3xl md:px-5 md:py-2 ">21</td>
            </tr>
            <tr>
              <td className=" text-right ">Lived:</td>
              <td className=" text-center text-xs font-semibold md:text-3xl md:px-5 md:py-2 ">Ishikawa pref</td>
            </tr>
            <tr>
              <td className=" text-right ">Born:</td>
              <td className=" text-center text-xs font-semibold md:text-3xl md:px-5 md:py-2 ">Shimane pref</td>
            </tr>
          </tbody></table>
        </div>
        <div className=" md:px-36 ">
          <div>
            <h2 className=" md:text-3xl font-semibold ">What maresuke?</h2>
            <p>
              どうも福島大稀といいます。僕の名前の<strong>稀</strong>ていう字が常用漢字じゃなくてどんなに変換しても出てこないんですよ。
              そこでmareと打ち込んでいくつか探すとようやく出てくるんです。
              機械とかに自分の名前を読ませると、やれdaimareやれhomareやらと一度もきちんと読まれたことがないことから高校の時の友達にmareと命名されました。
              それからなぜだか錬金術により<strong>maresuke</strong>になりました。
            </p>
          </div>
          <div>
            <h2 className=" md:text-3xl font-semibold ">about a me</h2>
            <p>
              基本的にわからないこととか不思議なこととかって面白いって考えるような人なので家族とか友達からも変な人扱いされることがしばしば…
              決して常識がないわけではなく、ただただ考えすぎて行動できないよりもある程度考えてその後は流れるままに〜というスタイルで生きているのでその結果こうなりました。
              大学では僕と同じような思考回路を持った人たちと課外活動でフットサルしたり、webアプリ作ったり、Neitiveアプリ作ったり、サーバー周りいじくりまわしたりしてました。
              思考回路が似たものどうしただと急に突飛なことしてもノリノリで一緒にやってくれるのでとても楽しい！
              基本的にアクティブ系でアウトドアメインのインドアも行けちゃうハイブリッドなフッ軽です‼︎<br/>
              百折不撓が僕のモットーで、。
            </p>
          </div>
          <div>
            <h2 className=" md:text-3xl font-semibold ">hoby!</h2>
            <p>
              iroiro
            </p>
          </div>
          <div className="skill-status">
            <h2 className=" md:text-3xl font-semibold ">Skill</h2>
            <div className="front">
              <h3>CrientSide(Frontend)</h3>
              <table className=" text-center "><tbody>
                <tr>
                  <th>Language</th>
                  <th>Library</th>
                  <th>Framework</th>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>React</td>
                  <td>Next.js</td>
                </tr>
                <tr>
                  <td>Swift</td>
                  <td>Cocoapods?</td>
                  <td>/</td>
                </tr>
                <tr>
                  <td>Kotlin</td>
                  <td>/</td>
                  <td>/</td>
                </tr>
              </tbody></table>
            </div>
            <div>
              <h3>SiverSide(Backend)</h3>
              <table><tbody>

              </tbody></table>
            </div> 
          </div>
        </div>
      </div>
      <h3><Link href="/">Home</Link></h3>
    </Layout>
  )
}
