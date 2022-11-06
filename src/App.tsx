import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    });
  }, []);
  return (
    <div
      style={{
        display: "grid",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "grid",
          height: "100vh",
          backgroundColor: "antiquewhite",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: 16,
            placeItems: "center",
            alignContent: "start",
          }}
        >
          <div style={{ display: "grid", marginTop: 36, textAlign: "center" }}>
            <div style={{ fontSize: 12 }}>
              YOU ARE INVITED TO THE WEDDING BUFFET OF
            </div>

            <div>誠邀您參與自助餐</div>
          </div>
          <div>
            <img className="photo" src="/red-min.jpg" />
          </div>
          <div
            style={{
              display: "grid",
              justifyItems: "center",
              gridTemplateColumns: "auto 1fr auto",
              gridTemplateRows: "auto auto",
              gridAutoFlow: "column",
              columnGap: 16,
            }}
          >
            <div style={{ alignSelf: "end" }}>黃嘉豪</div>
            <div style={{ alignSelf: "start", fontSize: 12 }}>WONG JIA HAU</div>
            <div style={{ gridRow: "1 / span 2", alignSelf: "center" }}>&</div>
            <div style={{ alignSelf: "end" }}>羅可俐</div>
            <div style={{ alignSelf: "start", fontSize: 12 }}>LOW KE LI</div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr auto 1fr",
              placeItems: "center",
              columnGap: 24,
            }}
          >
            <div>SATURDAY</div>
            <VerticalDivider />
            <div style={{ display: "grid", gap: 12, placeItems: "center" }}>
              <div>NOV 十一月</div>
              <div style={{ fontSize: 36 }}>26 日</div>
              <div>2022 年</div>
            </div>
            <VerticalDivider />
            <div>12:30 PM</div>
          </div>

          <div style={{ marginTop: 24, marginBottom: 48 }}>
            <button
              onClick={() => {
                document.getElementById("page-2")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              地點 LOCATION
            </button>
          </div>
        </div>
      </div>
      <div
        id="page-2"
        style={{
          display: "grid",
          height: "100vh",
          padding: "36px 24px",
          alignContent: "start",
          gap: 36,
          backgroundColor: "cornsilk",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "grid", gap: 24 }}>
          <div style={{ fontSize: 36 }}>自助餐地點</div>
          <div style={{ fontSize: 24 }}>Buffet Location</div>
        </div>
        <div
          style={{
            display: "grid",
            justifyItems: "start",
            gap: 16,
          }}
        >
          <div style={{ display: "grid", gap: 4 }}>
            <div>Multi-purpose Room, Phoenix Clubhouse</div>
            <div>9, Jalan Diamond City</div>
            <div>43500 Semenyih, Selangor</div>
          </div>
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              justifySelf: "center",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.1270760410059!2d101.85969512918977!3d2.9563589998654365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcd70533fb90b%3A0x12254f9a7f2d195b!2sPhoenix%20Clubhouse!5e0!3m2!1sen!2smy!4v1667723015483!5m2!1sen!2smy"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              width={screenWidth - 24 * 2}
              height={screenHeight * 0.4}
            />
          </div>
        </div>
        <div style={{ marginTop: 36, justifySelf: "center" }}>
          <button
            onClick={() => {
              document.getElementById("page-3")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            行程 ITINERARY
          </button>
        </div>
      </div>

      <div
        id="page-3"
        style={{
          display: "grid",
          height: "100vh",
          padding: "36px 24px",
          gap: 36,
          backgroundColor: "snow",
          alignContent: "start",
        }}
      >
        <div style={{ fontSize: 36 }}>行程 Itinerary</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto 1fr",
            gap: 12,
          }}
        >
          <div style={{ justifySelf: "end" }}>10:00 AM </div>
          <div
            style={{
              border: "0.5px solid grey",
              gridColumn: 2,
              gridRow: "1 / span 4",
              borderRadius: 1,
              height: "98%",
              alignSelf: "center",
            }}
          />
          <div>
            <div> 接新娘*</div>
            <div>Bridesmaids' Challenge*</div>
          </div>
          <div style={{ justifySelf: "end" }}>11:00 AM </div>
          <div>
            <div> 敬茶（女方）*</div>
            <div>Tea Ceremony (Bride's Relatives)*</div>
          </div>
          <div style={{ justifySelf: "end" }}>12:30 PM </div>
          <div>
            <div> 自助餐 </div>
            <div>Buffet</div>
          </div>
          <div style={{ justifySelf: "end" }}>4:00 PM </div>
          <div>
            <div> 結束</div>
            <div>The End</div>
          </div>
          <div
            style={{ fontSize: 14, marginTop: 16, gridColumn: "1 / span 3" }}
          >
            *在女方家 At bride's home
          </div>
        </div>
        <div style={{ marginTop: 36 }}>
          <img className="photo gradient-fade" src="/white-min.jpg" />
        </div>
      </div>
    </div>
  );
}

const VerticalDivider = () => {
  return (
    <div
      style={{ border: "0.5px solid grey", height: "80%", borderRadius: 1 }}
    />
  );
};

export default App;
