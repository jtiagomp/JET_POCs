define(['ojs/ojcore', 'knockout', 'ojs/ojtable', 'ojs/ojarraytabledatasource'],
        function (oj, ko)
        {
            function CustomerViewModel() {
                var self = this;
                self.data = ko.observableArray();
                jQuery.getJSON("http://127.0.0.1:7101/FusionRestApp/rest/1.0/customer").
                        then(function (res) {
                            $.each(res.items, function () {
                                self.data.push({
                                    Id: this.Id,
                                    Name: this.Name,
                                    Email: this.Email
                                });
                            });
                        });
                self.dataSource = new oj.ArrayTableDataSource(
                        self.data,
                        {idAttribute: 'Id'}
                );
            }
            return CustomerViewModel;
        });