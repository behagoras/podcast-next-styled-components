import React from 'react'

const about = () => {
  return (
    <div className="About">
      <div className="Card">
        <img src="../static/makesense_BID11.jpg" alt="" />
        <div className="Body">
          <h1>Tarjeta</h1>
          <p>Contenido de la tarjeta</p>
        </div>
      </div>
      <style jsx>
        {`
          img {
            max-width:200px;
            display: block;
          }
          .Body {
            padding:20px 5px;
          }
          p, h1 {
            margin:0;
          }
          .Card {
            display: flex;
            flex-direction: column;
            justify-items: center;
            margin:auto;
            display: inline-block;
            text-align:center;
            background-color: #333;
            box-shadow: 8px 8px 8px -4px rgba(50,50,50,0.75);
            border-radius: 25px;
            overflow: hidden;
          }
          .About {
            color:white;
            font-family: Helvetica, Arial, sans-serif;
            width: 100%;
            height: 100vh;
            display: flex;

          }
        `}
      </style>
      <style jsx global>
        {`
          body{
            background:#666;
          }
          *{
            {/* border:1px solid hotpink; */}
          }
        `}
      </style>
    </div>
  )
}

export default about
