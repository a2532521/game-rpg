
cc.Class({
    extends: cc.Component,

    properties: {
        hpLabel:cc.Label,
        mpLabel:cc.Label,
        apLabel:cc.Label,
    },
    onLoad(){

    },
    init(hp,ap,mp){
        this.setHp(hp);
        this.setAp(ap);
        this.setMp(mp);
    },
    setHp(hp){
        this.hp = hp;
        this.updateHp();
    }
    ,
    updateHp(){
     this.hpLabel.string =`HP\n${this.hp}`;
    },
    updateMp(){
        this.mpLabel.string =`MP\n${this.mp}`;
    },
    updateAp(){
        this.apLabel.string =`AP\n${this.ap}`;
    },  
    setMp(mp){
        this.mp = mp;
        this.updateMp();
    },
    setAp(ap){
        this.ap = ap;
        this.updateAp();
    },
    costAp(num){
        this.ap -=num;
        this.updateAp();
    },
    inclMp(num){
        this.mp +=num;
        if(this.mp >= cfg.playerMaxMp){
            this.mp = cfg.playerMaxMp;
        }
        this.updateMp();
    },
    hurt(num){
        this.hp -= num;
        this.updateHp();
    },
    heal(){
        this.hp += cfg.healHp;
        this.mp -= cfg.healMpCost;
        this.ap -= cfg.apCost;
        if(this.hp >= cfg.playerMaxHp){
            this.hp = cfg.playerMaxHp;
        }
        this.updateHp();
        this.updateAp();
        this.updateMp()
    }

});
