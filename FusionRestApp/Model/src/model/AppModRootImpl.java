package model;

import oracle.jbo.server.ApplicationModuleImpl;
// ---------------------------------------------------------------------
// ---    File generated by Oracle ADF Business Components Design Time.
// ---    Tue Dec 05 16:21:20 CLST 2017
// ---    Custom code may be added to this class.
// ---    Warning: Do not modify method signatures of generated methods.
// ---------------------------------------------------------------------
public class AppModRootImpl extends ApplicationModuleImpl {
    /**
     * This is the default constructor (do not remove).
     */
    public AppModRootImpl() {
    }

    /**
     * Container's getter for CustomerVO1.
     * @return CustomerVO1
     */
    public CustomerVOImpl getCustomerVO() {
        return (CustomerVOImpl) findViewObject("CustomerVO");
    }
}

