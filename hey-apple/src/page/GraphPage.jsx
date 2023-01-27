import Graph from '../components/Graph'
import '../scss/Graph.scss'
import data from './data'
import Header from '../components/Header'
function GraphPage(){
  const dates = []
  for(let i=0; i<data.length; i++){
    dates.push(data[i].date)
  }
  console.log(dates)
return (<div id = "graphwrap">
  <Header/>
  <div id = "graphposition">
<Graph data = {data} dates = {dates}/>
</div>
<div className="product_container">
            <div className="product">
                <div className="product_img_div"><img className="product_img"/></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                <div className="product_link_div"></div>
            </div>
            <div className="product">
                <div className="product_img_div"><img className="product_img"/></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                <div className="product_link_div"></div>
            </div>
            <div className="product">
                <div className="product_img_div"><img className="product_img"/></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                <div className="product_link_div"></div>
            </div>
            <div className="product">
                <div className="product_img_div"><img className="product_img"/></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                <div className="product_link_div"></div>
            </div>
            <div className="product">
                <div className="product_img_div"><img className="product_img"/></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                <div className="product_link_div"></div>
            </div>
            <div className="product">
                <div className="product_img_div"><img className="product_img"/></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                <div className="product_link_div"></div>
            </div>
      </div>
</div>
  )};
export default GraphPage;