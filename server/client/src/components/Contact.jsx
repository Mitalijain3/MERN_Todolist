import React , {useEffect,useRef} from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
   const form = useRef();
    const [userdata,setuserData]=React.useState({username:"",email:"",subject:"",message:""});
     const callContactPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        }
      });
      const data = await res.json();
      setuserData({...userdata,username:data.username,email:data.email});
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callContactPage();
  }, []);
const handleChange = (event)=>{
const {name,value}=event.target;
setuserData({...userdata,[name]:value});
}
const handleSubmit= async(e)=>{
  e.preventDefault();
  sendEmail(e);
  const {username,email,subject,message}=userdata;
  const res=await fetch('/contact',{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      username,email,subject,message
    })
  })
  const data = await res.json();
  if(data){
    window.alert("Message Sent");
      setuserData({...userdata,message:"",subject:""});
  }
}
function sendEmail(e){
  e.preventDefault();
  console.log('sendEmail');
  emailjs.sendForm("service_m1a8c1j","template_94bpyqo",form.current,"user_XYzn34lQ1xGzKsY1vtdHt").then((response)=>{
  console.log("Mail sent");
}).catch(err=>console.log("Mail not sent"));
}
  return (
    <div>
      <div className="content">
        <div className="container contact" >
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h3 className="heading mb-4 h3">Let's talk about everything!</h3>
                 <svg id="e0b35d3b-637f-4cd2-a9fd-b6e76c92ec56" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="350px" height="400px" viewBox="0 0 912.92081 680.22808"><title>delivery_address</title><rect x="102.00233" y="641.27035" width="556.10756" height="2.36139" fill="#3f3d56"/><path d="M540.45658,426.2614s-11.802,53.109,11.802,43.66742,9.44161-46.02782,9.44161-46.02782Z" transform="translate(-143.53959 -109.88596)" fill="#ffb9b9"/><path d="M761.15409,443.96441s28.32482,34.22581,10.62181,41.307-27.14462-31.86542-24.78422-35.406S761.15409,443.96441,761.15409,443.96441Z" transform="translate(-143.53959 -109.88596)" fill="#ffb9b9"/><circle cx="550.34306" cy="56.7313" r="35.40602" fill="#ffb9b9"/><polygon points="523.789 70.304 519.068 106.89 558.014 121.052 566.276 79.745 523.789 70.304" fill="#ffb9b9"/><path d="M689.16185,216.18569s-20.00721-9.87712-24.166-17.92077l-8.8796,8.47916s-63.73084-5.901-73.17244,25.96442-1.1802,147.52507-1.1802,147.52507-12.98221,51.92883-9.44161,53.109,47.208,22.42381,108.57846,10.62181c0,0,27.14461-4.72081,31.86542-1.18021s-2.3604-56.64962-2.3604-56.64962,47.208-106.21806,38.94662-119.20027-44.84763-40.12682-44.84763-40.12682l2.3604-12.9822S690.34205,220.90649,689.16185,216.18569Z" transform="translate(-143.53959 -109.88596)" fill="#cfcce0"/><path d="M592.3854,224.44709s-21.24361,10.62181-24.78421,27.14462S531.015,405.01779,534.55557,413.27919,536.916,432.1624,536.916,432.1624l30.68521-3.5406s-5.901-8.26141-2.3604-11.802,7.0812-15.34261,4.7208-20.06341-4.7208,3.5406,8.26141-11.802S620.71022,229.1679,592.3854,224.44709Z" transform="translate(-143.53959 -109.88596)" fill="#cfcce0"/><path d="M742.27088,264.57391s10.03171.5901,12.39211,17.11291,6.4911,118.61016,6.4911,118.61016,15.34261,33.04562,9.44161,37.76642-2.36041,11.802-2.36041,11.802l-21.24361,5.901-46.02782-71.99224Z" transform="translate(-143.53959 -109.88596)" fill="#cfcce0"/><path d="M575.8626,428.6218s-7.08121,1.1802-7.08121,27.14461-12.9822,106.21806-4.7208,119.20026,9.4416,129.82207,9.4416,129.82207,22.42382,9.4416,41.307-21.24361l2.3604-16.52281,4.7208-80.25364,18.88321-100.317L666.738,597.39048s-3.5406,133.36267,9.44161,133.36267,37.76642-10.6218,37.76642-10.6218,5.901-11.802,3.5406-17.703-4.7208-4.7208-2.3604-9.44161,5.901-127.46166,5.901-127.46166-4.7208-126.28147-10.6218-129.82207S575.8626,428.6218,575.8626,428.6218Z" transform="translate(-143.53959 -109.88596)" fill="#2f2e41"/><path d="M575.8626,700.06794l-18.88321,20.06341s-34.22582,31.86541-4.72081,33.04561,46.02783-18.88321,46.02783-21.24361,1.1802-10.6218,9.4416-10.6218,28.32482-20.06341,23.604-28.32482-18.88321-11.802-18.88321-11.802Z" transform="translate(-143.53959 -109.88596)" fill="#2f2e41"/><path d="M677.35985,726.03235s-14.16241,28.32482-5.901,34.22582,10.6218,8.2614,10.6218,8.2614,7.0812-1.1802,5.901,9.44161,42.48723,16.52281,44.84763,8.2614,1.1802-24.78421-3.54061-29.505-18.8832-37.76642-18.8832-37.76642S695.06286,701.24814,677.35985,726.03235Z" transform="translate(-143.53959 -109.88596)" fill="#2f2e41"/><path d="M729.61563,138.18723l6.66977-.94746s-9.28508-17.08977-27.25616-20.19295l6.30833-4.25771s-10.96188-7.83392-25.12862,2.2356c-7.44718,5.2933-16.09389,11.54151-22.4543,19.406l-6.50628-1.59008,1.25421,6.64282-10.96544,3.65643L661.55472,144.45a34.39538,34.39538,0,0,0-2.6885,9.85288,13.20963,13.20963,0,0,0,2.6474,9.54283h0s11.346-13.75438,11.94045-16.18661l-1.486,6.08055s7.41277-3.98771,8.30439-7.636l2.27357,5.06625,3.29154-6.2837L704.6381,156.569l-1.97636-6.28234,12.25716,4.92866-3.33623-7.90348s12.428,11.41415,11.3458,18.23779c-1.08239,6.8235,1.57189,14.18856,1.57189,14.18856S743.40339,151.22239,729.61563,138.18723Z" transform="translate(-143.53959 -109.88596)" fill="#2f2e41"/><rect x="723.92081" y="429.45048" width="189" height="2.26159" fill="#3f3d56"/><rect x="160.89644" y="603.7084" width="45.55804" height="45.55804" fill="#cfcce0"/><path d="M343.99959,753.15792H296.04376V705.20209h47.95583Zm-45.558-2.39779H341.6018V707.59988H298.44155Z" transform="translate(-143.53959 -109.88596)" fill="#3f3d56"/><rect x="375.34822" y="320.09176" width="30.9126" height="29.84223" transform="translate(-238.07349 53.63808) rotate(-21.14419)" fill="#f2f2f2"/><path d="M405.39252,341.159l-30.34888,11.73755-11.33113-29.298L394.06139,311.861Zm-29.398,9.68577,27.314-10.5638-10.198-26.36821-27.314,10.5638Z" transform="translate(-143.53959 -109.88596)" fill="#3f3d56"/><rect x="895.02761" y="630.14139" width="30.9126" height="29.84223" transform="translate(1080.94399 -535.56656) rotate(71.02706)" fill="#f2f2f2"/><path d="M903.78947,659.40718,893.21015,628.6354l29.70628-10.213,10.57932,30.77178Zm-8.565-29.74384,9.52139,27.6946,26.73565-9.1917-9.52139-27.69461Z" transform="translate(-143.53959 -109.88596)" fill="#3f3d56"/><path d="M286.8802,509.50788c16.90362.3626,30.35024,12.61229,30.35024,12.61229s-13.95955,11.6618-30.86317,11.29919S256.017,520.80707,256.017,520.80707,269.97659,509.14527,286.8802,509.50788Z" transform="translate(-143.53959 -109.88596)" fill="#6c63ff"/><path d="M201.89746,451.80706c15.27169,7.2553,32.78343,2.33538,32.78343,2.33538s-7.24856-16.68308-22.52025-23.93838-32.78342-2.33537-32.78342-2.33537S186.62577,444.55177,201.89746,451.80706Z" transform="translate(-143.53959 -109.88596)" fill="#6c63ff"/><path d="M203.44987,444.59715c16.83734-1.53875,31.575,9.12272,31.575,9.12272s-12.561,13.15627-29.39836,14.695-31.575-9.12272-31.575-9.12272S186.61253,446.1359,203.44987,444.59715Z" transform="translate(-143.53959 -109.88596)" fill="#3f3d56"/><path d="M265.17029,447.51226c-1.61385,16.8303,8.98175,31.61542,8.98175,31.61542s13.21218-12.5022,14.826-29.3325-8.98175-31.61543-8.98175-31.61543S266.78414,430.682,265.17029,447.51226Z" transform="translate(-143.53959 -109.88596)" fill="#3f3d56"/><path d="M344.46582,550.732c-8.83127,14.41779-5.79289,32.352-5.79289,32.352s17.3567-5.44166,26.188-19.85944,5.79289-32.352,5.79289-32.352S353.29709,536.31423,344.46582,550.732Z" transform="translate(-143.53959 -109.88596)" fill="#3f3d56"/><path d="M318.84517,707.49034l1.287-.8699a40.32083,40.32083,0,0,1-7.11618-22.36062c.036-11.69395,5.77986-22.51,11.33484-32.97005,1.03106-1.94153,2.05871-3.877,3.0473-5.81095a126.84805,126.84805,0,0,0,9.86618-24.7682c8.61631-32.01976.1331-69.797-22.69206-101.05455-18.10707-24.79626-45.09932-46.47925-82.51821-66.2882l-.72655,1.37273c37.20577,19.69594,64.0251,41.2299,81.99035,65.83163,22.55061,30.881,30.94168,68.16527,22.44633,99.73491a125.3412,125.3412,0,0,1-9.74862,24.46484c-.98556,1.92675-2.00941,3.85463-3.03668,5.78934-5.64334,10.62686-11.47894,21.61548-11.5161,33.69395A41.88823,41.88823,0,0,0,318.84517,707.49034Z" transform="translate(-143.53959 -109.88596)" fill="#3f3d56"/><circle cx="14.75596" cy="330.76716" r="14.75565" fill="#3f3d56"/><polygon points="818.044 417.926 628.109 349.709 662.018 255.296 780.281 226.293 851.954 323.514 818.044 417.926" fill="#2f2e41"/><path d="M938.57461,509.09041,796.6355,454.984c36.8477-49.35662,53.32538-84.17278,53.33749-138.959L991.9121,370.1314C958.93688,416.97245,945.147,452.18482,938.57461,509.09041Z" transform="translate(-143.53959 -109.88596)" fill="#f2f2f2"/><rect x="872.979" y="363.39985" width="78.69621" height="3.66029" transform="translate(46.39006 -410.89587) rotate(20.86657)" fill="#3f3d56"/><rect x="867.76392" y="377.08073" width="78.69621" height="3.66029" transform="translate(50.92105 -408.141) rotate(20.86657)" fill="#3f3d56"/><rect x="862.54884" y="390.7616" width="78.69621" height="3.66029" transform="translate(55.45204 -405.38614) rotate(20.86657)" fill="#3f3d56"/><rect x="857.33377" y="404.44248" width="78.69621" height="3.66029" transform="translate(59.98302 -402.63127) rotate(20.86657)" fill="#3f3d56"/><rect x="852.11869" y="418.12336" width="78.69621" height="3.66029" transform="translate(64.51401 -399.8764) rotate(20.86657)" fill="#3f3d56"/><rect x="846.90362" y="431.80424" width="78.69621" height="3.66029" transform="translate(69.045 -397.12153) rotate(20.86657)" fill="#3f3d56"/><rect x="841.68854" y="445.48512" width="78.69621" height="3.66029" transform="translate(73.57599 -394.36666) rotate(20.86657)" fill="#3f3d56"/><rect x="836.47346" y="459.16599" width="78.69621" height="3.66029" transform="translate(78.10697 -391.61179) rotate(20.86657)" fill="#3f3d56"/><polygon points="813.656 430.144 623.721 361.927 662.018 255.296 742.226 330.502 851.954 323.514 813.656 430.144" fill="#3f3d56"/><polygon points="717.148 396.545 622.442 362.53 645.518 298.277 647.401 298.953 625.001 361.323 717.824 394.662 717.148 396.545" fill="#6c63ff"/><rect x="796.39003" y="432.76595" width="29.50502" height="11.80201" transform="matrix(0.94114, 0.33802, -0.33802, 0.94114, 52.48444, -358.24895)" fill="#6c63ff"/><polygon points="369.521 642.111 220.865 642.032 222.032 558.576 295.91 591.781 370.688 560.655 369.521 642.111" fill="#3f3d56"/><rect x="376.17876" y="713.97725" width="21.73552" height="8.69421" transform="translate(-133.45769 -115.22766) rotate(0.80117)" fill="#6c63ff"/><polygon points="371.185 560.541 296.045 598.848 221.641 560.541 221.641 558.331 371.185 558.331 371.185 560.541" fill="#6c63ff"/><ellipse cx="923.32742" cy="345.64469" rx="9.02966" ry="25" transform="translate(127.93044 975.41116) rotate(-69.13343)" fill="#6c63ff"/><path d="M967.10457,212.43884a38,38,0,0,0-47.56929,25.00326c-6.23144,20.04035,10.751,93.40458,10.751,93.40458s55.59009-50.7982,61.82152-70.83855A38,38,0,0,0,967.10457,212.43884ZM950.477,265.91335a18,18,0,1,1,22.53282-11.84365A18,18,0,0,1,950.477,265.91335Z" transform="translate(-143.53959 -109.88596)" fill="#6c63ff"/></svg>
                </div>
                <div className="col-md-6">
                  <form
                    className="mb-5"
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    ref ={form}
                    onSubmit={sendEmail}
                  >
                    <div className="row">
                      <div className="col-md-12 form-group form-contact">
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          id="username"
                          placeholder="Your name"
                          onChange={handleChange}
                          value={userdata.username}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group form-contact">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                          onChange={handleChange}
                          value={userdata.email}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group form-contact">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          onChange={handleChange}
                          value={userdata.subject}
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group form-contact">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          cols="30"
                          rows="7"
                          onChange={handleChange}
                         value={userdata.message}
                          placeholder="Write your message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 form-contact">
                        <input
                          type="submit"
                          value="Send Message"
                          className="form-submit"
                          onClick={handleSubmit}
                          style={{width:"100%"}}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
