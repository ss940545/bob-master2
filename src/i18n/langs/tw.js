import M from "minimatch";

export const locale = {
    navbar: {
        Lang: '語言',
        Logo: '管理平台',
        Logout: '登出',
        home: '管理者介面'
    },
    footer: {
        contact: '聯繫我們',
        date: '週一至週五'
    },
    login: {
        login: '登入',
        an: '帳號',
        password: '密碼',
        inputan: '輸入帳號',
        inputpassword: '輸入密碼',
        error: '登入失敗',
        noinput: '帳號或密碼不可空白',
        success: '登入成功',
        welcome: '歡迎回來',
        confirm: '確認',
        locking: '帳號鎖定',
        errormore: '帳號或密碼錯誤失敗多次',
        errorunstatus: '你的帳戶已被停用',
        nocorrect: '帳號或密碼錯誤',
    },
    sidebar: {
        ['Account Management']: '帳戶管理',
        ['Settings management']: '設定管理',
        ['Report management']: '報表管理',
        ['Operation record']: '操作紀錄',
        ['Game Management']: '遊戲管理',
        ['member management']: '會員管理',
        ['account settings']: '帳戶設定',
        ['role setting']: '角色設定',
        ['Winning and losing report']: '勝負報表',
        ['betting record']: '下注紀錄',
        ['User login record']: '使用者登入紀錄',
        ['History record']: '歷程記錄',
        ['server settings']: '伺服器設定值',
        ['Game summary table']: '遊戲總表',
        ['supplier management']: '供應商管理'
    },
    cont: {
        today: '今日',
        yesterday: '昨日',
        week: '本周',
        lastweek: '上週',
        month: '本月',
        lastmonth: '上月',
        seven: '最近七天',
        playercount: '遊玩人數',
        gamecount: '場數',
        income: '收益',
        bet: '玩家下注',
        out: '玩家收益',
        wage: '手續費',
        surplus: '玩家利潤',
        margin: '差額',
        no: '無',
        loading: '載入中．．．',
        status: '狀態',
        on: '啟用',
        off: '停用',
        off2: '下架',
        all: '全部',
        name: '名稱',
        searchname: '搜尋名稱',
        account: '帳號',
        searchaccount: '搜尋帳號',
        password: '密碼',
        provider: '供應商',
        lastlogin: '最後一次登入',
        Update: '修改',
        submit: '送出',
        cancel: '取消',
        Create: '新增',
        detail:'詳細資訊',
        createmember: '新增會員',
        createprovider: '新增供應商',
        createaccount: '新增帳戶',
        createrole: '新增角色',
        creategame: '新增遊戲',
        goto: '前往',
        page: '頁',
        perpage: '每頁',
        createat: '創建時間',
        updataat: '更新時間',
        parameter: '參數',
        gameurl: '遊戲網址',
        gender: '性別',
        level: '權限等級',
        phone: '電話',
        position: '身分',
        male: '男性',
        female: '女性',
        admin: '管理者',
        user: '使用者',
        game: '遊戲',
        archive: '存檔名稱',
        playertoken: '玩家帳號',
        value: '存檔內容',
        currency: '貨幣',
        group: '分組',
        start: '開始',
        end: '結束',
        clear: '清除',
        da: '日期',
        date: '選擇日期',
        nodate: '尚未選擇日期',
        member: '會員',
        player: '玩家',
        searchplayer: '搜尋玩家',
        tid: '交易ID',
        logincount: '登入次數',
        loginres: '登入結果',
        failcount: '失敗次數',
        more: '詳細資料',
        ip: 'IP位置',
        agent: '網路代理',
        devicetype: '裝置種類',
        platform: '裝置系統',
        platformVersion: '系統版本',
        browser: '瀏覽器',
        url: '位置',
        action: '行為',
        Read: '檢視',
        origin: '原始資料',
        alter: '變更資料',
        gameid: '遊戲ID',
        profile: '設定檔名',
        servername: '參數名',
        servervalue: '參數值',
        name_zh: '名稱（繁中）',
        name_cn: '名稱（簡中）',
        name_en: '名稱（英文）',
        name_jp: '名稱（日文）',
        server_host: '伺服器位置',
        server_path: '伺服器路徑',
        server_port: '通訊埠',
        server_demo_port: '測試通訊埠',
        client_dir_name: '前端放置目錄',
        Updatepassword: '修改密碼',
        update_password:'新密碼',
        update_password_check:'確認新密碼',
        game_id:'局數',
        line:'線',
        items:'項目',
        amount:'數量',
        win:'贏得',
    },
    swal: {
        sorry: '很抱歉！',
        nodate: '查無相關資料',
        updatecheck: '是否確定要修改？',
        confirmed: '確定',
        cancel: '取消',
        updatasuccess: '修改成功',
        updatafail: '修改失敗',
        createsuccess: '新增成功',
        createfail: '新增失敗',
        fail: '失敗',
        special: '內容為空或含有特殊符號',
        logoutcheck:'是否確定要登出？',
        passwordnotsame:'新密碼與確認密碼不同',
        passworderror:'密碼錯誤',
    },
    meta: {
        ['member']: '會員管理',
        ['provider']: '供應商管理',
        ['account']: '帳戶設定',
        ['role']: '角色設定',
        ['winlose']: '勝負報表',
        ['history']: '下注紀錄',
        ['loginlog']: '使用者登入紀錄',
        ['courselog']: '歷程記錄',
        ['serverconfig']: '伺服器設定值',
        ['gamedetail']: '遊戲總表',
        ['main']: '管理者',   
        ['login in']: '登入',   
    },
    game: {
        zh: '名稱（繁中）',
        cn: '名稱（簡中）',
        en: '名稱（英文）',
        jp: '名稱（日文）',
    }
}