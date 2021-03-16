gdjs.Developer_32ToolsCode = {};
gdjs.Developer_32ToolsCode.GDBackgroundObjects1= [];
gdjs.Developer_32ToolsCode.GDBackgroundObjects2= [];
gdjs.Developer_32ToolsCode.GDBackObjects1= [];
gdjs.Developer_32ToolsCode.GDBackObjects2= [];
gdjs.Developer_32ToolsCode.GDUnlimitedMoneyObjects1= [];
gdjs.Developer_32ToolsCode.GDUnlimitedMoneyObjects2= [];
gdjs.Developer_32ToolsCode.GDInvincibleObjects1= [];
gdjs.Developer_32ToolsCode.GDInvincibleObjects2= [];
gdjs.Developer_32ToolsCode.GDCheckBox2Objects1= [];
gdjs.Developer_32ToolsCode.GDCheckBox2Objects2= [];
gdjs.Developer_32ToolsCode.GDCheckBox3Objects1= [];
gdjs.Developer_32ToolsCode.GDCheckBox3Objects2= [];
gdjs.Developer_32ToolsCode.GDCheckBoxObjects1= [];
gdjs.Developer_32ToolsCode.GDCheckBoxObjects2= [];

gdjs.Developer_32ToolsCode.conditionTrue_0 = {val:false};
gdjs.Developer_32ToolsCode.condition0IsTrue_0 = {val:false};
gdjs.Developer_32ToolsCode.condition1IsTrue_0 = {val:false};
gdjs.Developer_32ToolsCode.condition2IsTrue_0 = {val:false};


gdjs.Developer_32ToolsCode.mapOfGDgdjs_46Developer_9532ToolsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Developer_32ToolsCode.GDBackObjects1});gdjs.Developer_32ToolsCode.eventsList0 = function(runtimeScene) {

{


gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = false;
gdjs.Developer_32ToolsCode.condition1IsTrue_0.val = false;
{
gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Developer_32ToolsCode.condition0IsTrue_0.val ) {
{
gdjs.Developer_32ToolsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("InfMoney")) == 1;
}}
if (gdjs.Developer_32ToolsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CheckBox"), gdjs.Developer_32ToolsCode.GDCheckBoxObjects1);
{for(var i = 0, len = gdjs.Developer_32ToolsCode.GDCheckBoxObjects1.length ;i < len;++i) {
    gdjs.Developer_32ToolsCode.GDCheckBoxObjects1[i].getBehavior("Checkbox").SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = false;
gdjs.Developer_32ToolsCode.condition1IsTrue_0.val = false;
{
gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Developer_32ToolsCode.condition0IsTrue_0.val ) {
{
gdjs.Developer_32ToolsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Invincible")) == 1;
}}
if (gdjs.Developer_32ToolsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CheckBox2"), gdjs.Developer_32ToolsCode.GDCheckBox2Objects1);
{for(var i = 0, len = gdjs.Developer_32ToolsCode.GDCheckBox2Objects1.length ;i < len;++i) {
    gdjs.Developer_32ToolsCode.GDCheckBox2Objects1[i].getBehavior("Checkbox").SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBox"), gdjs.Developer_32ToolsCode.GDCheckBoxObjects1);

gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Developer_32ToolsCode.GDCheckBoxObjects1.length;i<l;++i) {
    if ( gdjs.Developer_32ToolsCode.GDCheckBoxObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = true;
        gdjs.Developer_32ToolsCode.GDCheckBoxObjects1[k] = gdjs.Developer_32ToolsCode.GDCheckBoxObjects1[i];
        ++k;
    }
}
gdjs.Developer_32ToolsCode.GDCheckBoxObjects1.length = k;}if (gdjs.Developer_32ToolsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Developer_32ToolsCode.GDCheckBoxObjects1 */
{runtimeScene.getGame().getVariables().get("InfMoney").setNumber(1);
}{runtimeScene.getGame().getVariables().get("LazerDamageCost").setNumber(0);
}{runtimeScene.getGame().getVariables().get("LazerSpeedCost").setNumber(0);
}{runtimeScene.getGame().getVariables().get("CoinMultiplierCost").setNumber(0);
}{runtimeScene.getGame().getVariables().get("FireRateCost").setNumber(0);
}{for(var i = 0, len = gdjs.Developer_32ToolsCode.GDCheckBoxObjects1.length ;i < len;++i) {
    gdjs.Developer_32ToolsCode.GDCheckBoxObjects1[i].getBehavior("Checkbox").SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBox"), gdjs.Developer_32ToolsCode.GDCheckBoxObjects1);

gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Developer_32ToolsCode.GDCheckBoxObjects1.length;i<l;++i) {
    if ( !(gdjs.Developer_32ToolsCode.GDCheckBoxObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = true;
        gdjs.Developer_32ToolsCode.GDCheckBoxObjects1[k] = gdjs.Developer_32ToolsCode.GDCheckBoxObjects1[i];
        ++k;
    }
}
gdjs.Developer_32ToolsCode.GDCheckBoxObjects1.length = k;}if (gdjs.Developer_32ToolsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Developer_32ToolsCode.GDCheckBoxObjects1 */
{runtimeScene.getGame().getVariables().get("InfMoney").setNumber(0);
}{runtimeScene.getGame().getVariables().get("LazerDamageCost").setNumber(10000);
}{runtimeScene.getGame().getVariables().get("LazerSpeedCost").setNumber(10000);
}{runtimeScene.getGame().getVariables().get("CoinMultiplierCost").setNumber(10000);
}{runtimeScene.getGame().getVariables().get("FireRateCost").setNumber(10000);
}{for(var i = 0, len = gdjs.Developer_32ToolsCode.GDCheckBoxObjects1.length ;i < len;++i) {
    gdjs.Developer_32ToolsCode.GDCheckBoxObjects1[i].getBehavior("Checkbox").SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBox2"), gdjs.Developer_32ToolsCode.GDCheckBox2Objects1);

gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = false;
gdjs.Developer_32ToolsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Developer_32ToolsCode.GDCheckBox2Objects1.length;i<l;++i) {
    if ( gdjs.Developer_32ToolsCode.GDCheckBox2Objects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = true;
        gdjs.Developer_32ToolsCode.GDCheckBox2Objects1[k] = gdjs.Developer_32ToolsCode.GDCheckBox2Objects1[i];
        ++k;
    }
}
gdjs.Developer_32ToolsCode.GDCheckBox2Objects1.length = k;}if ( gdjs.Developer_32ToolsCode.condition0IsTrue_0.val ) {
{
gdjs.Developer_32ToolsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Invincible")) == 0;
}}
if (gdjs.Developer_32ToolsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Developer_32ToolsCode.GDCheckBox2Objects1 */
{for(var i = 0, len = gdjs.Developer_32ToolsCode.GDCheckBox2Objects1.length ;i < len;++i) {
    gdjs.Developer_32ToolsCode.GDCheckBox2Objects1[i].getBehavior("Checkbox").SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().get("Invincible").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBox2"), gdjs.Developer_32ToolsCode.GDCheckBox2Objects1);

gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = false;
gdjs.Developer_32ToolsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Developer_32ToolsCode.GDCheckBox2Objects1.length;i<l;++i) {
    if ( !(gdjs.Developer_32ToolsCode.GDCheckBox2Objects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = true;
        gdjs.Developer_32ToolsCode.GDCheckBox2Objects1[k] = gdjs.Developer_32ToolsCode.GDCheckBox2Objects1[i];
        ++k;
    }
}
gdjs.Developer_32ToolsCode.GDCheckBox2Objects1.length = k;}if ( gdjs.Developer_32ToolsCode.condition0IsTrue_0.val ) {
{
gdjs.Developer_32ToolsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Invincible")) == 1;
}}
if (gdjs.Developer_32ToolsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Developer_32ToolsCode.GDCheckBox2Objects1 */
{runtimeScene.getGame().getVariables().get("Invincible").setNumber(0);
}{for(var i = 0, len = gdjs.Developer_32ToolsCode.GDCheckBox2Objects1.length ;i < len;++i) {
    gdjs.Developer_32ToolsCode.GDCheckBox2Objects1[i].getBehavior("Checkbox").SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Developer_32ToolsCode.GDBackObjects1);

gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = false;
gdjs.Developer_32ToolsCode.condition1IsTrue_0.val = false;
{
gdjs.Developer_32ToolsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Developer_32ToolsCode.condition0IsTrue_0.val ) {
{
gdjs.Developer_32ToolsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Developer_32ToolsCode.mapOfGDgdjs_46Developer_9532ToolsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Developer_32ToolsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


{
}

}


};

gdjs.Developer_32ToolsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Developer_32ToolsCode.GDBackgroundObjects1.length = 0;
gdjs.Developer_32ToolsCode.GDBackgroundObjects2.length = 0;
gdjs.Developer_32ToolsCode.GDBackObjects1.length = 0;
gdjs.Developer_32ToolsCode.GDBackObjects2.length = 0;
gdjs.Developer_32ToolsCode.GDUnlimitedMoneyObjects1.length = 0;
gdjs.Developer_32ToolsCode.GDUnlimitedMoneyObjects2.length = 0;
gdjs.Developer_32ToolsCode.GDInvincibleObjects1.length = 0;
gdjs.Developer_32ToolsCode.GDInvincibleObjects2.length = 0;
gdjs.Developer_32ToolsCode.GDCheckBox2Objects1.length = 0;
gdjs.Developer_32ToolsCode.GDCheckBox2Objects2.length = 0;
gdjs.Developer_32ToolsCode.GDCheckBox3Objects1.length = 0;
gdjs.Developer_32ToolsCode.GDCheckBox3Objects2.length = 0;
gdjs.Developer_32ToolsCode.GDCheckBoxObjects1.length = 0;
gdjs.Developer_32ToolsCode.GDCheckBoxObjects2.length = 0;

gdjs.Developer_32ToolsCode.eventsList0(runtimeScene);
return;

}

gdjs['Developer_32ToolsCode'] = gdjs.Developer_32ToolsCode;
