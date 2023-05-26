const dummyData =
[
    {
        id:1,
        name:"大東洋",
        image:"./img/daitouyou.jpg",
        adress:"大阪府 大阪市 北区中崎西2-1-9 中崎観光ビル大東洋",
        area:"大阪府 大阪市 北区",
        tel:"06-6312-7522",
        page:"http://www.daitoyo.co.jp/spa/mens/",
        male:{
            saunaTemp:100,
            coldBath:12,
            airBath:true,
            louryu:true,
            autoLouryu:true,
            selfLouryu:true,
            totonoiSpace:true
        },
        female:{
            saunaTemp:"",
            coldBath:"",
            airBath:false,
            louryu:false,
            autoLouryu:false,
            selfLouryu:false,
            totonoiSpace:false
        },
        price:1300,
        service:{
            allTime:false,
            restArea:true,
            eatingSpace:true,
            comics:true,
            waterDispenser:true,
            parkingArea:true
        },
        paying:{
            cash:true,
            credit:true,
            eMoney:true
        },
        rental:{
            faceTowel:true,
            bathTowel:false,
            indoorWear:true,
            mat:true
        },
        amenities:{
            shampoo:true,
            conditioner:true,
            bodySoap:true,
            hairDryer:true
        }
    },
    {
        id:2,
        name:"天然温泉　延羽の湯　鶴橋店",
        image:"./img/nobeha_tsuruhashi.jpg",
        adress:"大阪府 大阪市 東成区玉津3-13-41",
        area:"大阪府 大阪市 東成区",
        tel:"06-4259-1126",
        page:"http://www.nobuta123.co.jp/nobehatsuruhashi/",
        male:{
            saunaTemp:104,
            coldBath:16.8,
            airBath:true,
            louryu:true,
            autoLouryu:false,
            selfLouryu:true,
            totonoiSpace:true
        },
        female:{
            saunaTemp:98,
            coldBath:16.5,
            airBath:true,
            louryu:true,
            autoLouryu:false,
            selfLouryu:true,
            totonoiSpace:true
        },
        price:900,
        service:{
            allTime:false,
            restArea:true,
            eatingSpace:true,
            comics:true,
            waterDispenser:true,
            parkingArea:true
        },
        paying:{
            cash:true,
            credit:true,
            eMoney:true
        },
        rental:{
            faceTowel:false,
            bathTowel:true,
            indoorWear:true,
            mat:true
        },
        amenities:{
            shampoo:true,
            conditioner:true,
            bodySoap:true,
            hairDryer:true
        }
    },
    {
        id:3,
        name:"天然温泉　なにわの湯",
        image:"./img/naniwanoyu.jpg",
        adress:"大阪府 大阪市 北区長柄西1-7-31",
        area:"大阪府 大阪市 北区",
        tel:"06-6882-4126",
        page:"https://www.naniwanoyu.com/",
        male:{
            saunaTemp:82,
            coldBath:15.8,
            airBath:true,
            louryu:false,
            autoLouryu:true,
            selfLouryu:false,
            totonoiSpace:true
        },
        female:{
            saunaTemp:80,
            coldBath:16,
            airBath:true,
            louryu:false,
            autoLouryu:true,
            selfLouryu:false,
            totonoiSpace:true
        },
        price:850,
        service:{
            allTime:false,
            restArea:true,
            eatingSpace:true,
            comics:false,
            waterDispenser:true,
            parkingArea:true
        },
        paying:{
            cash:true,
            credit:true,
            eMoney:true
        },
        rental:{
            faceTowel:false,
            bathTowel:false,
            indoorWear:false,
            mat:true
        },
        amenities:{
            shampoo:true,
            conditioner:true,
            bodySoap:true,
            hairDryer:true
        }
    },
     {
        id:4,
        name:"ユートピア白玉温泉",
        image:"./img/utopia-shiratamaonsen.jpg",
        adress:"大阪府 大阪市 城東区蒲生2-7-36",
        area:"大阪府 大阪市 城東区",
        tel:"06-6933-0828",
        page:"https://www.utopia-shiratama.com/",
        male:{
            saunaTemp:90,
            coldBath:14,
            airBath:true ,
            louryu:false,
            autoLouryu:true,
            selfLouryu:false,
            totonoiSpace:true
        },
        female:{
            saunaTemp:84,
            coldBath:15,
            airBath:true,
            louryu:false,
            autoLouryu:true,
            selfLouryu:false,
            totonoiSpace:true
        },
        price:790,
        service:{
            allTime:false,
            restArea:true,
            eatingSpace:true,
            comics:true,
            waterDispenser:true,
            parkingArea:true
        },
        paying:{
            cash:true,
            credit:true,
            eMoney:true
        },
        rental:{
            faceTowel:true,
            bathTowel:true,
            indoorWear:false,
            mat:true
        },
        amenities:{
            shampoo:true ,
            conditioner:false,
            bodySoap:true,
            hairDryer:true
        }
    },
];

    // {
    //     id:,
    //     name:"",
    //     image:"./img/~",
    //     adress:"",
    //     area:"",
    //     tel:"",
    //     page:"",
    //     male:{
    //         saunaTemp:,
    //         coldBath:,
    //         airBath:true or false,
    //         louryu:true or false,
    //         autoLouryu:true or false,
    //         selfLouryu:true or false,
    //         totonoiSpace:true or false
    //     },
    //     female:{
    //         saunaTemp:,
    //         coldBath:,
    //         airBath:true or false,
    //         louryu:true or false,
    //         autoLouryu:true or false,
    //         selfLouryu:true or false,
    //         totonoiSpace:true or false
    //     },
    //     price:,
    //     service:{
    //         allTime:true or false,
    //         restArea:true or false,
    //         eatingSpace:true or false,
    //         comics:true or false,
    //         waterDispenser:true or false,
    //         parkingArea:true or false
    //     },
    //     paying:{
    //         cash:true or false,
    //         credit:true or false,
    //         eMoney:true or false
    //     },
    //     rental:{
    //         faceTowel:true or false,
    //         bathTowel:true or false,
    //         indoorWear:true or false,
    //         mat:true or false
    //     },
    //     amenities:{
    //         shampoo:true or false,
    //         conditioner:true or false,
    //         bodySoap:true or false,
    //         hairDryer:true or false
    //     }
    // },



export default dummyData;
