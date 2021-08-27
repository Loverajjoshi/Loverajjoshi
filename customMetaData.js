({
    doInit : function(component, event, helper) {
        var action = component.get("c.fetchMetdata");
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log(response.getReturnValue());
            if (state == "SUCCESS") {
                var result = response.getReturnValue();
                component.set("v.metdataRecords", result);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },
    savebutn : function(component, event, helper){
        component.set("v.spinner",true);
        var action = component.get("c.createdMetaData");
        var name = component.find('fieldId').get('v.value');     ;
        console.log('Names>>>>>>>>', name);
            action.setParams({
                metadataRecord : name
            });
            action.setCallback(this, function(response) {
                var state = response.getState();
                var result = response.getReturnValue();
                if(state == "SUCCESS"){
                    component.set("v.spinner", false);
                }
                else{
                    console.log(state)
                    component.set("v.spinner", false);
                }
            });
            $A.enqueueAction(action);
    }

})
