gdjs.How_32To_32PlayCode = {};
gdjs.How_32To_32PlayCode.GDTestValueObjects1= [];
gdjs.How_32To_32PlayCode.GDTestValueObjects2= [];
gdjs.How_32To_32PlayCode.GDBackgroundObjects1= [];
gdjs.How_32To_32PlayCode.GDBackgroundObjects2= [];
gdjs.How_32To_32PlayCode.GDHowTOObjects1= [];
gdjs.How_32To_32PlayCode.GDHowTOObjects2= [];
gdjs.How_32To_32PlayCode.GDBackObjects1= [];
gdjs.How_32To_32PlayCode.GDBackObjects2= [];
gdjs.How_32To_32PlayCode.GDRulesObjects1= [];
gdjs.How_32To_32PlayCode.GDRulesObjects2= [];
gdjs.How_32To_32PlayCode.GDYellowCrystalObjects1= [];
gdjs.How_32To_32PlayCode.GDYellowCrystalObjects2= [];
gdjs.How_32To_32PlayCode.GDRedCrystalObjects1= [];
gdjs.How_32To_32PlayCode.GDRedCrystalObjects2= [];
gdjs.How_32To_32PlayCode.GDGreenCrystalObjects1= [];
gdjs.How_32To_32PlayCode.GDGreenCrystalObjects2= [];
gdjs.How_32To_32PlayCode.GDMediumGreyMeteor1Objects1= [];
gdjs.How_32To_32PlayCode.GDMediumGreyMeteor1Objects2= [];
gdjs.How_32To_32PlayCode.GDHotKeyObjects1= [];
gdjs.How_32To_32PlayCode.GDHotKeyObjects2= [];

gdjs.How_32To_32PlayCode.conditionTrue_0 = {val:false};
gdjs.How_32To_32PlayCode.condition0IsTrue_0 = {val:false};
gdjs.How_32To_32PlayCode.condition1IsTrue_0 = {val:false};
gdjs.How_32To_32PlayCode.condition2IsTrue_0 = {val:false};
gdjs.How_32To_32PlayCode.conditionTrue_1 = {val:false};
gdjs.How_32To_32PlayCode.condition0IsTrue_1 = {val:false};
gdjs.How_32To_32PlayCode.condition1IsTrue_1 = {val:false};
gdjs.How_32To_32PlayCode.condition2IsTrue_1 = {val:false};


gdjs.How_32To_32PlayCode.mapOfGDgdjs_46How_9532To_9532PlayCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.How_32To_32PlayCode.GDBackObjects1});gdjs.How_32To_32PlayCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.How_32To_32PlayCode.GDBackObjects1);

gdjs.How_32To_32PlayCode.condition0IsTrue_0.val = false;
gdjs.How_32To_32PlayCode.condition1IsTrue_0.val = false;
{
gdjs.How_32To_32PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.How_32To_32PlayCode.condition0IsTrue_0.val ) {
{
gdjs.How_32To_32PlayCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.How_32To_32PlayCode.mapOfGDgdjs_46How_9532To_9532PlayCode_46GDBackObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.How_32To_32PlayCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Page", false);
}}

}


{


gdjs.How_32To_32PlayCode.condition0IsTrue_0.val = false;
gdjs.How_32To_32PlayCode.condition1IsTrue_0.val = false;
{
gdjs.How_32To_32PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.How_32To_32PlayCode.condition0IsTrue_0.val ) {
{
{gdjs.How_32To_32PlayCode.conditionTrue_1 = gdjs.How_32To_32PlayCode.condition1IsTrue_0;
gdjs.How_32To_32PlayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9665956);
}
}}
if (gdjs.How_32To_32PlayCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Sound").mul(-(1));
}}

}


{


gdjs.How_32To_32PlayCode.condition0IsTrue_0.val = false;
{
gdjs.How_32To_32PlayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Sound")) == 1;
}if (gdjs.How_32To_32PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 60);
}}

}


{


gdjs.How_32To_32PlayCode.condition0IsTrue_0.val = false;
{
gdjs.How_32To_32PlayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Sound")) == -(1);
}if (gdjs.How_32To_32PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{


{
}

}


};

gdjs.How_32To_32PlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.How_32To_32PlayCode.GDTestValueObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDTestValueObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDBackgroundObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDBackgroundObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDHowTOObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDHowTOObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDBackObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDBackObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDRulesObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDRulesObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDYellowCrystalObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDYellowCrystalObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDRedCrystalObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDRedCrystalObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDGreenCrystalObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDGreenCrystalObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDMediumGreyMeteor1Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDMediumGreyMeteor1Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDHotKeyObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDHotKeyObjects2.length = 0;

gdjs.How_32To_32PlayCode.eventsList0(runtimeScene);
return;

}

gdjs['How_32To_32PlayCode'] = gdjs.How_32To_32PlayCode;
