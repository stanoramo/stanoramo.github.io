gdjs.PauseCode = {};
gdjs.PauseCode.GDTestValueObjects1= [];
gdjs.PauseCode.GDTestValueObjects2= [];
gdjs.PauseCode.GDBackgroundObjects1= [];
gdjs.PauseCode.GDBackgroundObjects2= [];
gdjs.PauseCode.GDDevToolsObjects1= [];
gdjs.PauseCode.GDDevToolsObjects2= [];
gdjs.PauseCode.GDContinueObjects1= [];
gdjs.PauseCode.GDContinueObjects2= [];

gdjs.PauseCode.conditionTrue_0 = {val:false};
gdjs.PauseCode.condition0IsTrue_0 = {val:false};
gdjs.PauseCode.condition1IsTrue_0 = {val:false};
gdjs.PauseCode.condition2IsTrue_0 = {val:false};
gdjs.PauseCode.conditionTrue_1 = {val:false};
gdjs.PauseCode.condition0IsTrue_1 = {val:false};
gdjs.PauseCode.condition1IsTrue_1 = {val:false};
gdjs.PauseCode.condition2IsTrue_1 = {val:false};


gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDDevToolsObjects1Objects = Hashtable.newFrom({"DevTools": gdjs.PauseCode.GDDevToolsObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDContinueObjects1Objects = Hashtable.newFrom({"Continue": gdjs.PauseCode.GDContinueObjects1});gdjs.PauseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DevTools"), gdjs.PauseCode.GDDevToolsObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDDevToolsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Developer Tools");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.PauseCode.GDContinueObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDContinueObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
{gdjs.PauseCode.conditionTrue_1 = gdjs.PauseCode.condition1IsTrue_0;
gdjs.PauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9393500);
}
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Sound").mul(-(1));
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Sound")) == 1;
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 60);
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Sound")) == -(1);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{


{
}

}


};

gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDTestValueObjects1.length = 0;
gdjs.PauseCode.GDTestValueObjects2.length = 0;
gdjs.PauseCode.GDBackgroundObjects1.length = 0;
gdjs.PauseCode.GDBackgroundObjects2.length = 0;
gdjs.PauseCode.GDDevToolsObjects1.length = 0;
gdjs.PauseCode.GDDevToolsObjects2.length = 0;
gdjs.PauseCode.GDContinueObjects1.length = 0;
gdjs.PauseCode.GDContinueObjects2.length = 0;

gdjs.PauseCode.eventsList0(runtimeScene);
return;

}

gdjs['PauseCode'] = gdjs.PauseCode;
