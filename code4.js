gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDTestValueObjects1= [];
gdjs.Game_32OverCode.GDTestValueObjects2= [];
gdjs.Game_32OverCode.GDBackgroundObjects1= [];
gdjs.Game_32OverCode.GDBackgroundObjects2= [];
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDTryAgainObjects1= [];
gdjs.Game_32OverCode.GDTryAgainObjects2= [];
gdjs.Game_32OverCode.GDUpgradeObjects1= [];
gdjs.Game_32OverCode.GDUpgradeObjects2= [];
gdjs.Game_32OverCode.GDDevToolsObjects1= [];
gdjs.Game_32OverCode.GDDevToolsObjects2= [];
gdjs.Game_32OverCode.GDScoreObjects1= [];
gdjs.Game_32OverCode.GDScoreObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDTryAgainObjects1Objects = Hashtable.newFrom({"TryAgain": gdjs.Game_32OverCode.GDTryAgainObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDUpgradeObjects1Objects = Hashtable.newFrom({"Upgrade": gdjs.Game_32OverCode.GDUpgradeObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDDevToolsObjects1Objects = Hashtable.newFrom({"DevTools": gdjs.Game_32OverCode.GDDevToolsObjects1});gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.Game_32OverCode.GDTryAgainObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDTryAgainObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Endless Runner", false);
}{runtimeScene.getGame().getVariables().get("Score").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Upgrade"), gdjs.Game_32OverCode.GDUpgradeObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDUpgradeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Upgrades", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DevTools"), gdjs.Game_32OverCode.GDDevToolsObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDDevToolsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Developer Tools");
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("HighScore")) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score"));
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32OverCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreObjects1[i].setString("Score: " + (gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")))));
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("HighScore")) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score"));
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32OverCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreObjects1[i].setString("New High Score:\n " + (gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")))));
}
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDTestValueObjects1.length = 0;
gdjs.Game_32OverCode.GDTestValueObjects2.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDTryAgainObjects1.length = 0;
gdjs.Game_32OverCode.GDTryAgainObjects2.length = 0;
gdjs.Game_32OverCode.GDUpgradeObjects1.length = 0;
gdjs.Game_32OverCode.GDUpgradeObjects2.length = 0;
gdjs.Game_32OverCode.GDDevToolsObjects1.length = 0;
gdjs.Game_32OverCode.GDDevToolsObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
