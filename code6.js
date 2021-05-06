gdjs.Start_32PageCode = {};
gdjs.Start_32PageCode.GDTestValueObjects1= [];
gdjs.Start_32PageCode.GDTestValueObjects2= [];
gdjs.Start_32PageCode.GDBackgroundObjects1= [];
gdjs.Start_32PageCode.GDBackgroundObjects2= [];
gdjs.Start_32PageCode.GDHelpObjects1= [];
gdjs.Start_32PageCode.GDHelpObjects2= [];
gdjs.Start_32PageCode.GDStart_95GameObjects1= [];
gdjs.Start_32PageCode.GDStart_95GameObjects2= [];
gdjs.Start_32PageCode.GDDevToolsObjects1= [];
gdjs.Start_32PageCode.GDDevToolsObjects2= [];
gdjs.Start_32PageCode.GDTitleObjects1= [];
gdjs.Start_32PageCode.GDTitleObjects2= [];

gdjs.Start_32PageCode.conditionTrue_0 = {val:false};
gdjs.Start_32PageCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32PageCode.condition1IsTrue_0 = {val:false};
gdjs.Start_32PageCode.condition2IsTrue_0 = {val:false};
gdjs.Start_32PageCode.conditionTrue_1 = {val:false};
gdjs.Start_32PageCode.condition0IsTrue_1 = {val:false};
gdjs.Start_32PageCode.condition1IsTrue_1 = {val:false};
gdjs.Start_32PageCode.condition2IsTrue_1 = {val:false};


gdjs.Start_32PageCode.mapOfGDgdjs_46Start_9532PageCode_46GDStart_9595GameObjects1Objects = Hashtable.newFrom({"Start_Game": gdjs.Start_32PageCode.GDStart_95GameObjects1});gdjs.Start_32PageCode.mapOfGDgdjs_46Start_9532PageCode_46GDHelpObjects1Objects = Hashtable.newFrom({"Help": gdjs.Start_32PageCode.GDHelpObjects1});gdjs.Start_32PageCode.mapOfGDgdjs_46Start_9532PageCode_46GDDevToolsObjects1Objects = Hashtable.newFrom({"DevTools": gdjs.Start_32PageCode.GDDevToolsObjects1});gdjs.Start_32PageCode.eventsList0 = function(runtimeScene) {

{


gdjs.Start_32PageCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Start_32PageCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "yt1s.com - Space Harrier Music  MAIN THEME.mp3", true, 60, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_Game"), gdjs.Start_32PageCode.GDStart_95GameObjects1);

gdjs.Start_32PageCode.condition0IsTrue_0.val = false;
gdjs.Start_32PageCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32PageCode.mapOfGDgdjs_46Start_9532PageCode_46GDStart_9595GameObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32PageCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32PageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Start_32PageCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Endless Runner");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Help"), gdjs.Start_32PageCode.GDHelpObjects1);

gdjs.Start_32PageCode.condition0IsTrue_0.val = false;
gdjs.Start_32PageCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32PageCode.mapOfGDgdjs_46Start_9532PageCode_46GDHelpObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32PageCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32PageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Start_32PageCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "How To Play", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DevTools"), gdjs.Start_32PageCode.GDDevToolsObjects1);

gdjs.Start_32PageCode.condition0IsTrue_0.val = false;
gdjs.Start_32PageCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32PageCode.mapOfGDgdjs_46Start_9532PageCode_46GDDevToolsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32PageCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32PageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Start_32PageCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Developer Tools");
}}

}


{


gdjs.Start_32PageCode.condition0IsTrue_0.val = false;
gdjs.Start_32PageCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.Start_32PageCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_32PageCode.conditionTrue_1 = gdjs.Start_32PageCode.condition1IsTrue_0;
gdjs.Start_32PageCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9790820);
}
}}
if (gdjs.Start_32PageCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Sound").mul(-(1));
}}

}


{


gdjs.Start_32PageCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Sound")) == -(1);
}if (gdjs.Start_32PageCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{


gdjs.Start_32PageCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Sound")) == 1;
}if (gdjs.Start_32PageCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 60);
}}

}


};

gdjs.Start_32PageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32PageCode.GDTestValueObjects1.length = 0;
gdjs.Start_32PageCode.GDTestValueObjects2.length = 0;
gdjs.Start_32PageCode.GDBackgroundObjects1.length = 0;
gdjs.Start_32PageCode.GDBackgroundObjects2.length = 0;
gdjs.Start_32PageCode.GDHelpObjects1.length = 0;
gdjs.Start_32PageCode.GDHelpObjects2.length = 0;
gdjs.Start_32PageCode.GDStart_95GameObjects1.length = 0;
gdjs.Start_32PageCode.GDStart_95GameObjects2.length = 0;
gdjs.Start_32PageCode.GDDevToolsObjects1.length = 0;
gdjs.Start_32PageCode.GDDevToolsObjects2.length = 0;
gdjs.Start_32PageCode.GDTitleObjects1.length = 0;
gdjs.Start_32PageCode.GDTitleObjects2.length = 0;

gdjs.Start_32PageCode.eventsList0(runtimeScene);
return;

}

gdjs['Start_32PageCode'] = gdjs.Start_32PageCode;
