import { Worlds } from "./Worlds";
import { LodestoneObject } from "./LodestoneObject";
import { RegexStatements } from "./RegexStatements";

export class Character implements LodestoneObject {
    private id: String;
    public WorldName: string;
    public Title: string;
    public FirstName: string;
    public LastName: string;
    public Race: string;
    public Clan: string;
    public Gender: string;
    public FreeCompany: string;
    public GrandCompany: string;
    public GrandCompanyStanding: string;
    public Hometown: string;
    public Nameday: string;
    public Guardian: string;
    public Classes: { Class: string, Level: number }[] = [];
    public SelfIntroduction: string;
    public CurrentClass: string;
    public Headshot: string;
    public Portrait: string;

    constructor(id: String) {
        this.id = id;
    }

    
    get url() {
        return `https://na.finalfantasyxiv.com/lodestone/character/${this.id}`
    }

    populate(data: string) {
        Object.getOwnPropertyNames(RegexStatements.Character).forEach(key => {
            switch (key) {
                case "Classes":
                    this.getClasses(data);
                    break;
                case "Gender":
                    this.Gender = data.match(RegexStatements.Character.Gender)[1] === "♂" ? "Male" : "Female";
                    break;
                case "CurrentClass":
                    this.CurrentClass = this.MapClass(data.match(RegexStatements.Character.CurrentClass)[1])
                    break;
                default:
                    var text = data.match(RegexStatements.Character[key]);
                    var res = text ? text[1] : ""
                    this[key] = res.trim();
                    break;
            }
        });
        return this;
    }

    getClasses(data) {
        var regex = new RegExp(RegexStatements.Character.Classes, "g");
        var match = regex.exec(data)
        while (match != null) {
            console.log(match[1]);
            this.Classes.push({ Class: match[1], Level: parseInt(match[2]) });
            match = regex.exec(data);
        }
    }




    MapClass(CurrentClassUrl: string) {

        CurrentClassUrl = CurrentClassUrl.replace('https://img.finalfantasyxiv.com/lds/h', '');

        var jobs_png = {
            '/U/F5JzG9RPIKFSogtaKNBk455aYA.png': "Gladiator",
            '/N/St9rjDJB3xNKGYg-vwooZ4j6CM.png': "Marauder",
            '/s/gl62VOTBJrm7D_BmAZITngUEM8.png': "Conjurer",
            '/7/WdFey0jyHn9Nnt1Qnm-J3yTg5s.png': "Scholar",
            '/1/erCgjnMSiab4LiHpWxVc-tXAqk.png': "Astrologian",
            '/V/iW7IBKQ7oglB9jmbn6LwdZXkWw.png': "Pugilist",
            '/k/tYTpoSwFLuGYGDJMff8GEFuDQs.png': "Lancer",
            '/y/wdwVVcptybfgSruoh8R344y_GA.png': "Rogue",
            '/m/KndG72XtCFwaq1I1iqwcmO_0zc.png': "Samurai",
            '/Q/ZpqEJWYHj9SvHGuV9cIyRNnIkk.png': "Archer",
            '/E/vmtbIlf6Uv8rVp2YFCWA25X0dc.png': "Machinist",
            '/4/IM3PoP6p06GqEyReygdhZNh7fU.png': "Thaumaturge",
            '/e/VYP1LKTDpt8uJVvUT7OKrXNL9E.png': "Arcanist",
            '/E/d0Tx-vhnsMYfYpGe9MvslemEfg.png': "Paladin",
            '/y/A3UhbjZvDeN3tf_6nJ85VP0RY0.png': "Warrior",
            '/l/5CZEvDOMYMyVn2td9LZigsgw9s.png': "Dark Knight",
            '/7/i20QvSPcSQTybykLZDbQCgPwMw.png': "White Mage",
            '/0/Fso5hanZVEEAaZ7OGWJsXpf3jw.png': "Ninja",
            '/F/KWI-9P3RX_Ojjn_mwCS2N0-3TI.png': "Bard",
            '/P/V01m8YRBYcIs5vgbRtpDiqltSE.png': "Black Mage",
            '/h/4ghjpyyuNelzw1Bl0sM_PBA_FE.png': "Summoner",
            '/q/s3MlLUKmRAHy0pH57PnFStHmIw.png': "Red Mage",
            '/v/YCN6F-xiXf03Ts3pXoBihh2OBk.png': "Carpenter",
            '/5/EEHVV5cIPkOZ6v5ALaoN5XSVRU.png': "Blacksmith",
            '/G/Rq5wcK3IPEaAB8N-T9l6tBPxCY.png': "Armorer",
            '/L/LbEjgw0cwO_2gQSmhta9z03pjM.png': "Goldsmith",
            '/b/ACAcQe3hWFxbWRVPqxKj_MzDiY.png': "Leatherworker",
            '/X/E69jrsOMGFvFpCX87F5wqgT_Vo.png': "Weaver",
            '/C/bBVQ9IFeXqjEdpuIxmKvSkqalE.png': "Alchemist",
            '/m/1kMI2v_KEVgo30RFvdFCyySkFo.png': "Culinarian",
            '/A/aM2Dd6Vo4HW_UGasK7tLuZ6fu4.png': "Miner",
            '/I/jGRnjIlwWridqM-mIPNew6bhHM.png': "Botanist",
            '/x/B4Azydbn7Prubxt7OL9p1LZXZ0.png': "Fisher"
        }
        return jobs_png[CurrentClassUrl];
    }
}


