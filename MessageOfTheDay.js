var MessageOfTheDay = {
    APP_NAME: "MessageOfTheDay",
  
    fetchDatas: function () {
      var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1EFIt1jGvAqsj5LTjQ49zYkfKSbrOYBU84mRtp23FVqU/edit#gid=0");
      var record_cnt = sheet.getRange("B1").getValue();
      var row = parseInt(Math.random() * record_cnt) + 3;
      
      return sheet.getSheetValues(row, 1, 1, 5);
    },
    
    send: function (datas) {
      var today = new Date().toLocaleDateString("en-US");
      
      var title = "Message of the Day";
      var contents = "No." + datas[0][0]
      + "\n" + datas[0][1] + "\n"
      + "[" + datas[0][2] + "] " + datas[0][3] + " " + datas[0][4] + "\n";
      
      SendLINE.sendMessage(Consts.TARGET_BERG, title + "\n" + contents);
    }
  }
  
  function MessageOfTheDay_main() {
    Logger.clear();
    Logger.log("--- " + MessageOfTheDay.APP_NAME + " start.");
    
    var datas = MessageOfTheDay.fetchDatas();
    Logger.log(" id(" + datas[0][0] + ") was selected.");
    
    MessageOfTheDay.send(datas);
    
    Logger.log("--- " + MessageOfTheDay.APP_NAME + " end.");
    
  //  sendLog_(MessageOfTheDay.APP_NAME);
  }
  