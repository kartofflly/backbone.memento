describe("when ignoring attributes", function(){
  beforeEach(function(){
    this.model = new IgnoredAttrsModel();
  });

  describe("and ignored attribute is set, stored, set, restored", function(){
    beforeEach(function(){
      this.model.set({ignoreMe: "something"});
      this.model.store();
      this.model.set({ignoreMe: "something else"});
      this.model.restore();
    });

    it("should not restore the ignored attribute", function(){
      expect(this.model.get("ignoreMe")).toBe("something else");
    });
  });

  describe("and ignored attribute is not set, stored, set, restored", function(){
    beforeEach(function(){
      this.model.store();
      this.model.set({ignoreMe: "a change"});
      this.model.restore();
    });
    
    it("should not unset the ignored attribute", function(){
      expect(this.model.get("ignoreMe")).toBe("a change");
    });
  });

  describe("and ignored attribute is set, stored, unset, restored", function(){
    beforeEach(function(){
      this.model.set({ignoreMe: "a change"});
      this.model.store();
      this.model.unset("ignoreMe");
      this.model.restore();
    });
    
    it("should not re-set the ignored attribute", function(){
      expect(this.model.get("ignoreMe")).toBeUndefined();
    });
  });
});
