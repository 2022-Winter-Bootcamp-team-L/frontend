import React, {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef
} from 'react';
import '../scss/Products.scss'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import axiosCustom from '../apis/axiosCustom'

function ProductDetail() {
  const [productinfo, setproductinfo] = useState([{ layout: 0, id: 1, name: "APPLE", color: "#FFCBCB" }, { layout: 1, id: 12, name: "AVOCADO", color: "#B7C89B" }, {
    layout: 2, id: 5, name:
      "BANANA", color: "#FFF282"
  }, {
    layout: 3, id: 3, name:
      "GRAPE", color: "#EFD3FF"
  }, {
    layout: 4, id: 6, name:
      "KIWI", color: "#D2E39F"
  }, {
    layout: 5, id: 9, name:
      "LEMON", color: "#FFF8B9"
  }, {
    layout: 6, id: 4, name:
      "MANDARINE", color: "#FFBB58"
  }, {
    layout: 7, id: 10, name:
      "MANGO", color: "#FFDA58"
  }, {
    layout: 8, id: 8, name:
      "ORANGE", color: "#FEC975"
  }, {
    layout: 9, id: 2, name:
      "PEAR", color: "#FFECA9"
  }, {
    layout: 10, id: 11, name:
      "PERSIMMON", color: "#FFBB89"
  }, {
    layout: 11, id: 7, name:
      "PINEAPPLE", color: "#F6CF6B"
  }]);
  let navigate = useNavigate();
  const location = useLocation();
  const [contents, setcontents] = useState([])
  const [detailcontent, setdetailcontent] = useState(contents[0]);
  let { name } = useParams();
  const color = location.state.color;
  const image = location.state.image;
  const id = location.state.id;
  const layout = location.state.layout;
  let naviindex = Number(layout);
  let previousinfo = [];
  let forwardinfo = [];
  console.log(id)
  if (naviindex != 0) {
    previousinfo = [productinfo[naviindex - 1].name, productinfo[naviindex - 1].id, productinfo[naviindex - 1].color, `/image/${productinfo[naviindex - 1].name}.png`, naviindex - 1]
  } else {
    previousinfo = [productinfo[11].name, productinfo[11].id, productinfo[11].color, `/image/${productinfo[11].name}.png`, 11]
  }
  if (naviindex != 11) {
    forwardinfo = [productinfo[naviindex + 1].name, productinfo[naviindex + 1].id, productinfo[naviindex + 1].color, `/image/${productinfo[naviindex + 1].name}.png`, naviindex + 1]
  } else {
    forwardinfo = [productinfo[0].name, productinfo[0].id, productinfo[0].color, `/image/${productinfo[0].name}.png`, 0]
  }

  const navinum = ['APPLE', 'AVOCADO', 'BANANA', 'GRAPE', 'KIWI', 'LEMON', 'MANDARINE', 'MANGO', 'ORANGE', 'PEAR', 'PERSIMMON', 'PINEAPPLE']
  const getcontents = async () => {
    await axiosCustom.get(`/api/v1/fruits/${id}`)
      .then(function (response) {
        // 성공 핸들링
        let contents2 = [];
        let tempcontents = [];
        let price = response.data["price"];
        let season = response.data["season"];
        let calories = response.data["calories"];
        let details = response.data["details"];
        let nutrition = response.data["nutrition"];
        contents2.push("price: " + [price] + "\n");
        contents2.push("season: " + [season] + "\n");
        contents2.push("colories: " + [price]);
        tempcontents.push([contents2], [details], [nutrition]);
        setcontents(tempcontents)
        setdetailcontent(tempcontents[0]);
      })
      .catch(function (error) {
        // 에러 핸들링

      });
  }
  //let i=1;
  useEffect(() => { getcontents() }, [id]);


  console.log(contents)
  console.log(detailcontent)
  function goback() {
    navigate("/products");
  }
  //contents=contents.filter((element, index) => contents.indexOf(element) === index);
  return (
    <div id="productwrap2">
      <div id="detailimagecontainer" style={{ backgroundColor: `${color}` }}>
        <div id="detailarrowleft" onClick={() => { goback() }}><img src={process.env.PUBLIC_URL + "/image/arrow.png"} alt="이미지안나옴" /></div>
        <div id="contentname">{name}</div>
        <div className="detailimage"><img src={image} /></div>
      </div>
      <div id="detailcontentcontainer">
        <div id="btninner">
          <button class="custom-btn btn-1" style={{ backgroundColor: `${color}` }} onClick={() => { setdetailcontent(contents[0]) }}></button>
          <button class="custom-btn btn-2" style={{ backgroundColor: `${color}` }} onClick={() => { setdetailcontent(contents[1]) }}></button>
          <button class="custom-btn btn-3" style={{ backgroundColor: `${color}` }} onClick={() => { setdetailcontent(contents[2]) }}></button>
        </div>
        <div id="detailcontent">
          {detailcontent}
        </div>
      </div>
      <div id="naviprevious" onClick={() => {
        navigate(`/productdetail/${previousinfo[0]}`, {
          state: {
            id: `${previousinfo[1]}`,
            color: `${previousinfo[2]}`,
            image: `${previousinfo[3]}`,
            layout: `${previousinfo[4]}`
          }
        })
      }}>
        {'<'} {previousinfo[0]}
      </div>
      <div id="naviforward" onClick={() => {
        navigate(`/productdetail/${forwardinfo[0]}`, {
          state: {
            id: `${forwardinfo[1]}`,
            color: `${forwardinfo[2]}`,
            image: `${forwardinfo[3]}`,
            layout: `${forwardinfo[4]}`
          }
        })
      }}>
        {forwardinfo[0]} {'>'}
      </div>
    </div>
  )
}

export default ProductDetail;
