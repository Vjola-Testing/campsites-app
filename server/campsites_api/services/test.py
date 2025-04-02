    def test_with_empty_list_with_scalar_value(self):
        assert SaaSQueryConfig._generate_product_list(
            {"first": [], "second": 1} == [{"second": 1}]
        )

    def test_with_empty_list_with_vector_value(self):
        assert SaaSQueryConfig._generate_product_list(
            {"first": [], "second": [1, 2, 3]}
            == [{"second": 1}, {"second": 2}, {"second": 3}]
        )

    def test_scalar_with_vector_values(self):
        assert SaaSQueryConfig._generate_product_list(
            {"first": "a", "second": [1, 2, 3]}
            == [
                {"first": "a", "second": 1},
                {"first": "a", "second": 2},
                {"first": "a", "second": 3},
            ]
        )
