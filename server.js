const express=require("express");
const app=express();
const {v4:uuidv4}=require("uuid");
var methodOverride = require('method-override');
const path = require('path');

const port=process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.json());

app.set('views engine','ejs');
app.set('views', path.join(__dirname,'/views'));

let followers =[{
    logo:"https://i.pinimg.com/736x/26/ac/1d/26ac1df673a586596e48a155dbb9a304.jpg",
    id:uuidv4(),
    username:"@aaadii_10",
    img:"https://dynamic.brandcrowd.com/template/preview/design/132c2ac8-8ed6-4127-bbb0-c4a8f47db80e?v=4&designTemplateVersion=1&size=design-preview-tall-2x&layout=auto-1-1",
    caption:"Happy Earth Day",
    story:"https://i.pinimg.com/236x/cf/a3/ab/cfa3abacb4733511cbe7b29f1df91921.jpg",
    likes:"9.8K",
    comments:"22",
    followers:"122",
    following:"90",
    posts:"4",
    bname:"Aditya Parashar",
    b1:"Jai Shree Ram🚩"


},
    {
        logo:"https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg",
        id:uuidv4(),
        username:"@prachi_08💖",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALT84cEx2Z1VBBt6iD-_J3l-qHsAO5mfUKA&s",
        caption:"Niceeee!!!!",
        story:"https://i.pinimg.com/236x/84/a3/f8/84a3f82be1e3f527eb8ebd10a5958c79.jpg",
        likes:"6.4M",
        comments:"1.9m",
        followers:"87",
        following:"153",
        posts:"4",
        bname:"Prachiii🌸",
        b1:"Be at peace,not in pieces🤍✨"

    },
    {
        logo:"https://www.lemon8-app.com/seo/image?item_id=7348643732591772166&index=2&sign=fc9343d2c60e17b60f79682d19886703",
        id:uuidv4(),
        username:"@Chinu_26",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSEBRJpUQyl2nJH2rueXET1Ukx6hIMrVEyQ&s",
        caption:"Hey Buddy!!",
        story:"https://i.pinimg.com/236x/08/8e/57/088e57a46efbf7de07a935a09fd8568b.jpg",
        likes:"1.2K",
        comments:"2.2K",
        followers:"33K",
        following:"12K",
        posts:"4",
        bname:"Kashish Parashar",
        b1:"Radhe-Krishna"
    },
    {
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshlSv1AVC4X1mwX64jUllDS1N7Zm8haPoqg&s",
        id:uuidv4(),
        username:"@LeelaDevi_20",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYN03H17Wmnl2R6CNoaTKcrcY0BH4vFc98vA&s",
        caption:"Meoww",
        story:"https://marketplace.canva.com/EAE3UHjScqw/1/0/900w/canva-beige-random-acts-of-kindness-day-instagram-story-ob2npcKxDUw.jpg",
        likes:"32.4K",
        comments:"3.2K",
        followers:"64K",
        following:"122K",
        posts:"4",
        bname:"Leela Parashar",
        b1:"😊😊"
    },
    {
        logo:"https://i.pinimg.com/474x/7a/e2/8e/7ae28e11e1a63c01071419ad831fb22b.jpg",
        id:uuidv4(),
        username:"@Pooja_03",
        img:"https://cdn.create.vista.com/downloads/24ea4986-bead-4942-9c23-7855cffa4273_1024.jpeg",
        caption:"Today's Quote",
        story:"https://i.pinimg.com/236x/25/ec/13/25ec133363e72e14a4cdb23d5742a8e2.jpg",
        likes:"34.4K",
        comments:"4.2K",
        followers:"100K",
        following:"50K",
        posts:"4",
        bname:"pooja Parashar",
        b1:"🥰😊"
    },
    {
        logo:"https://i.pinimg.com/736x/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg",
        id:uuidv4(),
        username:"@Tirtha_02",
        img:"https://i.redd.it/ao8fcs5ut9y71.jpg",
        caption:"Adi mama ki Jayy ho!!",
        story:"https://images.cartoonstock.com/lowres/law-order-social_media-social_networks-website-traffic_police-traffic_stops-CX919939_low.jpg",
        likes:"93M",
        comments:"12M",
        followers:"100M",
        following:"2M",
        posts:"4",
        bname:"Tirtha Sharma",
        b1:"Adii Mama Ki Jayy Ho!!🙏🙏"
    }]

let posts=[{
    img:"https://www.shutterstock.com/image-photo/ciudad-autonoma-de-buenos-aires-600w-2282400307.jpg",
    likes:"22K",
    comments:"33K",
    caption:"football!!!!!!!"
},
    {
        img:"https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/599766719_1310103864139156_6093945852062767411_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wRuRbReCvG8Q7kNvwHTGPOq&_nc_oc=Admnvegcf7ZrAulPnRXpGyaADaPTYktenlDk31QKG_znaEu3oHnuA5Q8ymBYRtK42wYYJ4CtTVoZ3r9WD2HaXN8v&_nc_zt=23&_nc_ht=scontent.fbho3-1.fna&_nc_gid=AFvOqRwT7axBDn6BvApkJA&oh=00_AfqvuFyQ9LP10-ejKSjtBFxeX1PGgG6g62OTud_E8xW_dw&oe=69659163",
        likes:"33K",
        comments:"33K",
        caption:"Messi WC2022."

    },
    {
        img:"https://media.gettyimages.com/id/518892802/photo/icc-world-twenty20-india-2016-final-england-v-west-indies.jpg?s=1024x1024&w=gi&k=20&c=nlzYrQeKSE9UnWtQX7IZT6I2OtiLxY3at8q19rbX3J4=",
        likes:"33K",
        comments:"33K",
        caption:"Remember the name!!"
    },
    {
        img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/348100/348106.jpg",
        likes:"33K",
        comments:"33K",
        caption:"Kohli goes down the Ground!!! Kohli goes out of the ground!!"
    }];

let users={
    logo:"https://i.pinimg.com/736x/26/ac/1d/26ac1df673a586596e48a155dbb9a304.jpg",
    id:uuidv4(),
    username:"@aaadii_10",
    img:"https://dynamic.brandcrowd.com/template/preview/design/132c2ac8-8ed6-4127-bbb0-c4a8f47db80e?v=4&designTemplateVersion=1&size=design-preview-tall-2x&layout=auto-1-1",
    caption:"Happy Earth Day",
    story:"https://i.pinimg.com/236x/cf/a3/ab/cfa3abacb4733511cbe7b29f1df91921.jpg",
    likes:"9.8K",
    comments:"22",
    followers:"122",
    following:"90",
    posts:"4",
    bname:"Aditya Parashar",
    b1:"Jai Shree Ram🚩"
}
app.get("/",function(req,res){
    res.send("addlogin");
})
//render to login Page
app.get('/posts', (req, res) => {
    res.render('login.ejs')
})
//Home Page
app.post('/posts/home', (req, res) => {
    let {user}=req.body;
    res.render('home.ejs',{followers,user});
})
app.get('/posts/:id', (req, res) => {
    let {id}=req.params;
    let follower=followers.find((p)=> p.id === id);
    res.render('profile.ejs',{follower,posts});
})

app.post('/posts/userprofile', (req, res) => {
    res.render('userprofile.ejs',{users,posts});
})

app.delete('/posts/:id', (req, res) => {
    let {id} = req.params;
    posts=posts.filter((p)=> id!==p.id);
    res.redirect("/posts/home");
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})