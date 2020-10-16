const model = {
    "modelTopology": {
        "class_name": "Sequential",
        "config": {
            "name": "sequential_6",
            "layers": [
                {
                    "class_name": "Sequential",
                    "config": {
                        "name": "sequential_3",
                        "layers": [
                            {
                                "class_name": "Model",
                                "config": {
                                    "name": "model2",
                                    "layers": [
                                        {
                                            "name": "input_1",
                                            "class_name": "InputLayer",
                                            "config": {
                                                "batch_input_shape": [
                                                    null,
                                                    224,
                                                    224,
                                                    3
                                                ],
                                                "dtype": "float32",
                                                "sparse": false,
                                                "name": "input_1"
                                            },
                                            "inbound_nodes": []
                                        },
                                        {
                                            "name": "Conv1_pad",
                                            "class_name": "ZeroPadding2D",
                                            "config": {
                                                "padding": [
                                                    [
                                                        0,
                                                        1
                                                    ],
                                                    [
                                                        0,
                                                        1
                                                    ]
                                                ],
                                                "data_format": "channels_last",
                                                "name": "Conv1_pad",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "input_1",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "Conv1",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 16,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    2,
                                                    2
                                                ],
                                                "padding": "valid",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "Conv1",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "Conv1_pad",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "bn_Conv1",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "bn_Conv1",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "Conv1",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "Conv1_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "Conv1_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "bn_Conv1",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "expanded_conv_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "expanded_conv_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "Conv1_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "expanded_conv_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "expanded_conv_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "expanded_conv_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "expanded_conv_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "expanded_conv_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "expanded_conv_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "expanded_conv_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 8,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "expanded_conv_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "expanded_conv_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "expanded_conv_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "expanded_conv_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "expanded_conv_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_1_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 48,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_1_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "expanded_conv_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_1_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_1_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_1_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_1_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_1_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_1_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_1_pad",
                                            "class_name": "ZeroPadding2D",
                                            "config": {
                                                "padding": [
                                                    [
                                                        0,
                                                        1
                                                    ],
                                                    [
                                                        0,
                                                        1
                                                    ]
                                                ],
                                                "data_format": "channels_last",
                                                "name": "block_1_pad",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_1_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_1_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    2,
                                                    2
                                                ],
                                                "padding": "valid",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_1_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_1_pad",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_1_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_1_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_1_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_1_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_1_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_1_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_1_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 8,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_1_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_1_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_1_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_1_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_1_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_2_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 48,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_2_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_1_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_2_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_2_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_2_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_2_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_2_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_2_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_2_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_2_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_2_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_2_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_2_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_2_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_2_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_2_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_2_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_2_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 8,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_2_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_2_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_2_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_2_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_2_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_2_add",
                                            "class_name": "Add",
                                            "config": {
                                                "name": "block_2_add",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_1_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ],
                                                    [
                                                        "block_2_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_3_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 48,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_3_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_2_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_3_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_3_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_3_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_3_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_3_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_3_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_3_pad",
                                            "class_name": "ZeroPadding2D",
                                            "config": {
                                                "padding": [
                                                    [
                                                        0,
                                                        1
                                                    ],
                                                    [
                                                        0,
                                                        1
                                                    ]
                                                ],
                                                "data_format": "channels_last",
                                                "name": "block_3_pad",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_3_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_3_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    2,
                                                    2
                                                ],
                                                "padding": "valid",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_3_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_3_pad",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_3_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_3_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_3_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_3_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_3_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_3_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_3_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 16,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_3_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_3_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_3_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_3_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_3_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_4_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 96,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_4_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_3_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_4_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_4_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_4_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_4_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_4_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_4_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_4_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_4_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_4_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_4_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_4_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_4_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_4_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_4_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_4_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_4_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 16,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_4_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_4_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_4_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_4_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_4_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_4_add",
                                            "class_name": "Add",
                                            "config": {
                                                "name": "block_4_add",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_3_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ],
                                                    [
                                                        "block_4_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_5_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 96,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_5_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_4_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_5_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_5_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_5_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_5_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_5_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_5_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_5_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_5_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_5_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_5_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_5_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_5_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_5_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_5_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_5_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_5_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 16,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_5_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_5_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_5_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_5_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_5_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_5_add",
                                            "class_name": "Add",
                                            "config": {
                                                "name": "block_5_add",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_4_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ],
                                                    [
                                                        "block_5_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_6_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 96,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_6_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_5_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_6_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_6_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_6_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_6_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_6_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_6_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_6_pad",
                                            "class_name": "ZeroPadding2D",
                                            "config": {
                                                "padding": [
                                                    [
                                                        0,
                                                        1
                                                    ],
                                                    [
                                                        0,
                                                        1
                                                    ]
                                                ],
                                                "data_format": "channels_last",
                                                "name": "block_6_pad",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_6_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_6_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    2,
                                                    2
                                                ],
                                                "padding": "valid",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_6_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_6_pad",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_6_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_6_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_6_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_6_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_6_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_6_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_6_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 24,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_6_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_6_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_6_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_6_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_6_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_7_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 144,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_7_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_6_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_7_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_7_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_7_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_7_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_7_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_7_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_7_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_7_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_7_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_7_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_7_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_7_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_7_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_7_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_7_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_7_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 24,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_7_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_7_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_7_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_7_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_7_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_7_add",
                                            "class_name": "Add",
                                            "config": {
                                                "name": "block_7_add",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_6_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ],
                                                    [
                                                        "block_7_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_8_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 144,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_8_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_7_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_8_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_8_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_8_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_8_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_8_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_8_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_8_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_8_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_8_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_8_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_8_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_8_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_8_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_8_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_8_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_8_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 24,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_8_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_8_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_8_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_8_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_8_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_8_add",
                                            "class_name": "Add",
                                            "config": {
                                                "name": "block_8_add",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_7_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ],
                                                    [
                                                        "block_8_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_9_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 144,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_9_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_8_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_9_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_9_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_9_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_9_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_9_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_9_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_9_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_9_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_9_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_9_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_9_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_9_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_9_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_9_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_9_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_9_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 24,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_9_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_9_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_9_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_9_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_9_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_9_add",
                                            "class_name": "Add",
                                            "config": {
                                                "name": "block_9_add",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_8_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ],
                                                    [
                                                        "block_9_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_10_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 144,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_10_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_9_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_10_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_10_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_10_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_10_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_10_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_10_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_10_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_10_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_10_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_10_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_10_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_10_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_10_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_10_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_10_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_10_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 32,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_10_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_10_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_10_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_10_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_10_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_11_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 192,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_11_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_10_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_11_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_11_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_11_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_11_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_11_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_11_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_11_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_11_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_11_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_11_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_11_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_11_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_11_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_11_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_11_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_11_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 32,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_11_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_11_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_11_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_11_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_11_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_11_add",
                                            "class_name": "Add",
                                            "config": {
                                                "name": "block_11_add",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_10_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ],
                                                    [
                                                        "block_11_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_12_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 192,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_12_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_11_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_12_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_12_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_12_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_12_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_12_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_12_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_12_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_12_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_12_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_12_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_12_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_12_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_12_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_12_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_12_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_12_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 32,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_12_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_12_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_12_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_12_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_12_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_12_add",
                                            "class_name": "Add",
                                            "config": {
                                                "name": "block_12_add",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_11_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ],
                                                    [
                                                        "block_12_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_13_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 192,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_13_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_12_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_13_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_13_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_13_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_13_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_13_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_13_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_13_pad",
                                            "class_name": "ZeroPadding2D",
                                            "config": {
                                                "padding": [
                                                    [
                                                        0,
                                                        1
                                                    ],
                                                    [
                                                        0,
                                                        1
                                                    ]
                                                ],
                                                "data_format": "channels_last",
                                                "name": "block_13_pad",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_13_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_13_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    2,
                                                    2
                                                ],
                                                "padding": "valid",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_13_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_13_pad",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_13_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_13_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_13_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_13_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_13_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_13_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_13_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 56,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_13_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_13_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_13_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_13_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_13_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_14_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 336,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_14_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_13_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_14_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_14_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_14_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_14_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_14_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_14_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_14_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_14_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_14_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_14_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_14_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_14_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_14_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_14_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_14_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_14_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 56,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_14_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_14_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_14_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_14_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_14_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_14_add",
                                            "class_name": "Add",
                                            "config": {
                                                "name": "block_14_add",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_13_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ],
                                                    [
                                                        "block_14_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_15_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 336,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_15_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_14_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_15_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_15_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_15_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_15_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_15_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_15_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_15_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_15_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_15_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_15_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_15_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_15_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_15_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_15_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_15_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_15_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 56,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_15_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_15_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_15_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_15_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_15_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_15_add",
                                            "class_name": "Add",
                                            "config": {
                                                "name": "block_15_add",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_14_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ],
                                                    [
                                                        "block_15_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_16_expand",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 336,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_16_expand",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_15_add",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_16_expand_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_16_expand_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_16_expand",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_16_expand_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_16_expand_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_16_expand_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_16_depthwise",
                                            "class_name": "DepthwiseConv2D",
                                            "config": {
                                                "kernel_size": [
                                                    3,
                                                    3
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_16_depthwise",
                                                "trainable": true,
                                                "depth_multiplier": 1,
                                                "depthwise_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "depthwise_regularizer": null,
                                                "depthwise_constraint": null
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_16_expand_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_16_depthwise_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_16_depthwise_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_16_depthwise",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_16_depthwise_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "block_16_depthwise_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_16_depthwise_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_16_project",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 112,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "same",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "block_16_project",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_16_depthwise_relu",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "block_16_project_BN",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "block_16_project_BN",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_16_project",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "Conv_1",
                                            "class_name": "Conv2D",
                                            "config": {
                                                "filters": 1280,
                                                "kernel_initializer": {
                                                    "class_name": "VarianceScaling",
                                                    "config": {
                                                        "scale": 1,
                                                        "mode": "fan_avg",
                                                        "distribution": "uniform",
                                                        "seed": null
                                                    }
                                                },
                                                "kernel_regularizer": null,
                                                "kernel_constraint": null,
                                                "kernel_size": [
                                                    1,
                                                    1
                                                ],
                                                "strides": [
                                                    1,
                                                    1
                                                ],
                                                "padding": "valid",
                                                "data_format": "channels_last",
                                                "dilation_rate": [
                                                    1,
                                                    1
                                                ],
                                                "activation": "linear",
                                                "use_bias": false,
                                                "bias_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "bias_regularizer": null,
                                                "activity_regularizer": null,
                                                "bias_constraint": null,
                                                "name": "Conv_1",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "block_16_project_BN",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "Conv_1_bn",
                                            "class_name": "BatchNormalization",
                                            "config": {
                                                "axis": -1,
                                                "momentum": 0.999,
                                                "epsilon": 0.001,
                                                "center": true,
                                                "scale": true,
                                                "beta_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "gamma_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "moving_mean_initializer": {
                                                    "class_name": "Zeros",
                                                    "config": {}
                                                },
                                                "moving_variance_initializer": {
                                                    "class_name": "Ones",
                                                    "config": {}
                                                },
                                                "beta_regularizer": null,
                                                "gamma_regularizer": null,
                                                "beta_constraint": null,
                                                "gamma_constraint": null,
                                                "name": "Conv_1_bn",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "Conv_1",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        },
                                        {
                                            "name": "out_relu",
                                            "class_name": "ReLU",
                                            "config": {
                                                "max_value": 6,
                                                "name": "out_relu",
                                                "trainable": true
                                            },
                                            "inbound_nodes": [
                                                [
                                                    [
                                                        "Conv_1_bn",
                                                        0,
                                                        0,
                                                        {}
                                                    ]
                                                ]
                                            ]
                                        }
                                    ],
                                    "input_layers": [
                                        [
                                            "input_1",
                                            0,
                                            0
                                        ]
                                    ],
                                    "output_layers": [
                                        [
                                            "out_relu",
                                            0,
                                            0
                                        ]
                                    ]
                                }
                            },
                            {
                                "class_name": "GlobalAveragePooling2D",
                                "config": {
                                    "data_format": "channels_last",
                                    "name": "global_average_pooling2d_GlobalAveragePooling2D2",
                                    "trainable": true
                                }
                            }
                        ]
                    }
                },
                {
                    "class_name": "Sequential",
                    "config": {
                        "name": "sequential_5",
                        "layers": [
                            {
                                "class_name": "Dense",
                                "config": {
                                    "units": 100,
                                    "activation": "relu",
                                    "use_bias": true,
                                    "kernel_initializer": {
                                        "class_name": "VarianceScaling",
                                        "config": {
                                            "scale": 1,
                                            "mode": "fan_in",
                                            "distribution": "normal",
                                            "seed": null
                                        }
                                    },
                                    "bias_initializer": {
                                        "class_name": "Zeros",
                                        "config": {}
                                    },
                                    "kernel_regularizer": null,
                                    "bias_regularizer": null,
                                    "activity_regularizer": null,
                                    "kernel_constraint": null,
                                    "bias_constraint": null,
                                    "name": "dense_Dense1",
                                    "trainable": true,
                                    "batch_input_shape": [
                                        null,
                                        1280
                                    ],
                                    "dtype": "float32"
                                }
                            },
                            {
                                "class_name": "Dense",
                                "config": {
                                    "units": 2,
                                    "activation": "softmax",
                                    "use_bias": false,
                                    "kernel_initializer": {
                                        "class_name": "VarianceScaling",
                                        "config": {
                                            "scale": 1,
                                            "mode": "fan_in",
                                            "distribution": "normal",
                                            "seed": null
                                        }
                                    },
                                    "bias_initializer": {
                                        "class_name": "Zeros",
                                        "config": {}
                                    },
                                    "kernel_regularizer": null,
                                    "bias_regularizer": null,
                                    "activity_regularizer": null,
                                    "kernel_constraint": null,
                                    "bias_constraint": null,
                                    "name": "dense_Dense2",
                                    "trainable": true
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "keras_version": "tfjs-layers 1.3.1",
        "backend": "tensor_flow.js"
    },
    "weightsManifest": [
        {
            "paths": [
                "weights.bin"
            ],
            "weights": [
                {
                    "name": "Conv1/kernel",
                    "shape": [
                        3,
                        3,
                        3,
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "bn_Conv1/gamma",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "bn_Conv1/beta",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "expanded_conv_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        16,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "expanded_conv_depthwise_BN/gamma",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "expanded_conv_depthwise_BN/beta",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "expanded_conv_project/kernel",
                    "shape": [
                        1,
                        1,
                        16,
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "expanded_conv_project_BN/gamma",
                    "shape": [
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "expanded_conv_project_BN/beta",
                    "shape": [
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_expand/kernel",
                    "shape": [
                        1,
                        1,
                        8,
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_expand_BN/gamma",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_expand_BN/beta",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        48,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_depthwise_BN/gamma",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_depthwise_BN/beta",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_project/kernel",
                    "shape": [
                        1,
                        1,
                        48,
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_project_BN/gamma",
                    "shape": [
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_project_BN/beta",
                    "shape": [
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_expand/kernel",
                    "shape": [
                        1,
                        1,
                        8,
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_expand_BN/gamma",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_expand_BN/beta",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        48,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_depthwise_BN/gamma",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_depthwise_BN/beta",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_project/kernel",
                    "shape": [
                        1,
                        1,
                        48,
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_project_BN/gamma",
                    "shape": [
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_project_BN/beta",
                    "shape": [
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_expand/kernel",
                    "shape": [
                        1,
                        1,
                        8,
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_expand_BN/gamma",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_expand_BN/beta",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        48,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_depthwise_BN/gamma",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_depthwise_BN/beta",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_project/kernel",
                    "shape": [
                        1,
                        1,
                        48,
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_project_BN/gamma",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_project_BN/beta",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_expand/kernel",
                    "shape": [
                        1,
                        1,
                        16,
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_expand_BN/gamma",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_expand_BN/beta",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        96,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_depthwise_BN/gamma",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_depthwise_BN/beta",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_project/kernel",
                    "shape": [
                        1,
                        1,
                        96,
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_project_BN/gamma",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_project_BN/beta",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_expand/kernel",
                    "shape": [
                        1,
                        1,
                        16,
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_expand_BN/gamma",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_expand_BN/beta",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        96,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_depthwise_BN/gamma",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_depthwise_BN/beta",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_project/kernel",
                    "shape": [
                        1,
                        1,
                        96,
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_project_BN/gamma",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_project_BN/beta",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_expand/kernel",
                    "shape": [
                        1,
                        1,
                        16,
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_expand_BN/gamma",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_expand_BN/beta",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        96,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_depthwise_BN/gamma",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_depthwise_BN/beta",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_project/kernel",
                    "shape": [
                        1,
                        1,
                        96,
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_project_BN/gamma",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_project_BN/beta",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_expand/kernel",
                    "shape": [
                        1,
                        1,
                        24,
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_expand_BN/gamma",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_expand_BN/beta",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        144,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_depthwise_BN/gamma",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_depthwise_BN/beta",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_project/kernel",
                    "shape": [
                        1,
                        1,
                        144,
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_project_BN/gamma",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_project_BN/beta",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_expand/kernel",
                    "shape": [
                        1,
                        1,
                        24,
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_expand_BN/gamma",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_expand_BN/beta",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        144,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_depthwise_BN/gamma",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_depthwise_BN/beta",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_project/kernel",
                    "shape": [
                        1,
                        1,
                        144,
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_project_BN/gamma",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_project_BN/beta",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_expand/kernel",
                    "shape": [
                        1,
                        1,
                        24,
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_expand_BN/gamma",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_expand_BN/beta",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        144,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_depthwise_BN/gamma",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_depthwise_BN/beta",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_project/kernel",
                    "shape": [
                        1,
                        1,
                        144,
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_project_BN/gamma",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_project_BN/beta",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_expand/kernel",
                    "shape": [
                        1,
                        1,
                        24,
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_expand_BN/gamma",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_expand_BN/beta",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        144,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_depthwise_BN/gamma",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_depthwise_BN/beta",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_project/kernel",
                    "shape": [
                        1,
                        1,
                        144,
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_project_BN/gamma",
                    "shape": [
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_project_BN/beta",
                    "shape": [
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_expand/kernel",
                    "shape": [
                        1,
                        1,
                        32,
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_expand_BN/gamma",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_expand_BN/beta",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        192,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_depthwise_BN/gamma",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_depthwise_BN/beta",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_project/kernel",
                    "shape": [
                        1,
                        1,
                        192,
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_project_BN/gamma",
                    "shape": [
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_project_BN/beta",
                    "shape": [
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_expand/kernel",
                    "shape": [
                        1,
                        1,
                        32,
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_expand_BN/gamma",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_expand_BN/beta",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        192,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_depthwise_BN/gamma",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_depthwise_BN/beta",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_project/kernel",
                    "shape": [
                        1,
                        1,
                        192,
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_project_BN/gamma",
                    "shape": [
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_project_BN/beta",
                    "shape": [
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_expand/kernel",
                    "shape": [
                        1,
                        1,
                        32,
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_expand_BN/gamma",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_expand_BN/beta",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        192,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_depthwise_BN/gamma",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_depthwise_BN/beta",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_project/kernel",
                    "shape": [
                        1,
                        1,
                        192,
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_project_BN/gamma",
                    "shape": [
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_project_BN/beta",
                    "shape": [
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_expand/kernel",
                    "shape": [
                        1,
                        1,
                        56,
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_expand_BN/gamma",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_expand_BN/beta",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        336,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_depthwise_BN/gamma",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_depthwise_BN/beta",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_project/kernel",
                    "shape": [
                        1,
                        1,
                        336,
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_project_BN/gamma",
                    "shape": [
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_project_BN/beta",
                    "shape": [
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_expand/kernel",
                    "shape": [
                        1,
                        1,
                        56,
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_expand_BN/gamma",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_expand_BN/beta",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        336,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_depthwise_BN/gamma",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_depthwise_BN/beta",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_project/kernel",
                    "shape": [
                        1,
                        1,
                        336,
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_project_BN/gamma",
                    "shape": [
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_project_BN/beta",
                    "shape": [
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_expand/kernel",
                    "shape": [
                        1,
                        1,
                        56,
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_expand_BN/gamma",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_expand_BN/beta",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_depthwise/depthwise_kernel",
                    "shape": [
                        3,
                        3,
                        336,
                        1
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_depthwise_BN/gamma",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_depthwise_BN/beta",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_project/kernel",
                    "shape": [
                        1,
                        1,
                        336,
                        112
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_project_BN/gamma",
                    "shape": [
                        112
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_project_BN/beta",
                    "shape": [
                        112
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "Conv_1/kernel",
                    "shape": [
                        1,
                        1,
                        112,
                        1280
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "Conv_1_bn/gamma",
                    "shape": [
                        1280
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "Conv_1_bn/beta",
                    "shape": [
                        1280
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "dense_Dense1/kernel",
                    "shape": [
                        1280,
                        100
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "dense_Dense1/bias",
                    "shape": [
                        100
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "dense_Dense2/kernel",
                    "shape": [
                        100,
                        2
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "bn_Conv1/moving_mean",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "bn_Conv1/moving_variance",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "expanded_conv_depthwise_BN/moving_mean",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "expanded_conv_depthwise_BN/moving_variance",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "expanded_conv_project_BN/moving_mean",
                    "shape": [
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "expanded_conv_project_BN/moving_variance",
                    "shape": [
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_expand_BN/moving_mean",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_expand_BN/moving_variance",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_depthwise_BN/moving_mean",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_depthwise_BN/moving_variance",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_project_BN/moving_mean",
                    "shape": [
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_1_project_BN/moving_variance",
                    "shape": [
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_expand_BN/moving_mean",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_expand_BN/moving_variance",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_depthwise_BN/moving_mean",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_depthwise_BN/moving_variance",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_project_BN/moving_mean",
                    "shape": [
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_2_project_BN/moving_variance",
                    "shape": [
                        8
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_expand_BN/moving_mean",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_expand_BN/moving_variance",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_depthwise_BN/moving_mean",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_depthwise_BN/moving_variance",
                    "shape": [
                        48
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_project_BN/moving_mean",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_3_project_BN/moving_variance",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_expand_BN/moving_mean",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_expand_BN/moving_variance",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_depthwise_BN/moving_mean",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_depthwise_BN/moving_variance",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_project_BN/moving_mean",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_4_project_BN/moving_variance",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_expand_BN/moving_mean",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_expand_BN/moving_variance",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_depthwise_BN/moving_mean",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_depthwise_BN/moving_variance",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_project_BN/moving_mean",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_5_project_BN/moving_variance",
                    "shape": [
                        16
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_expand_BN/moving_mean",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_expand_BN/moving_variance",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_depthwise_BN/moving_mean",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_depthwise_BN/moving_variance",
                    "shape": [
                        96
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_project_BN/moving_mean",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_6_project_BN/moving_variance",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_expand_BN/moving_mean",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_expand_BN/moving_variance",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_depthwise_BN/moving_mean",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_depthwise_BN/moving_variance",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_project_BN/moving_mean",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_7_project_BN/moving_variance",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_expand_BN/moving_mean",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_expand_BN/moving_variance",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_depthwise_BN/moving_mean",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_depthwise_BN/moving_variance",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_project_BN/moving_mean",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_8_project_BN/moving_variance",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_expand_BN/moving_mean",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_expand_BN/moving_variance",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_depthwise_BN/moving_mean",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_depthwise_BN/moving_variance",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_project_BN/moving_mean",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_9_project_BN/moving_variance",
                    "shape": [
                        24
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_expand_BN/moving_mean",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_expand_BN/moving_variance",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_depthwise_BN/moving_mean",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_depthwise_BN/moving_variance",
                    "shape": [
                        144
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_project_BN/moving_mean",
                    "shape": [
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_10_project_BN/moving_variance",
                    "shape": [
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_expand_BN/moving_mean",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_expand_BN/moving_variance",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_depthwise_BN/moving_mean",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_depthwise_BN/moving_variance",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_project_BN/moving_mean",
                    "shape": [
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_11_project_BN/moving_variance",
                    "shape": [
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_expand_BN/moving_mean",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_expand_BN/moving_variance",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_depthwise_BN/moving_mean",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_depthwise_BN/moving_variance",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_project_BN/moving_mean",
                    "shape": [
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_12_project_BN/moving_variance",
                    "shape": [
                        32
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_expand_BN/moving_mean",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_expand_BN/moving_variance",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_depthwise_BN/moving_mean",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_depthwise_BN/moving_variance",
                    "shape": [
                        192
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_project_BN/moving_mean",
                    "shape": [
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_13_project_BN/moving_variance",
                    "shape": [
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_expand_BN/moving_mean",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_expand_BN/moving_variance",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_depthwise_BN/moving_mean",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_depthwise_BN/moving_variance",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_project_BN/moving_mean",
                    "shape": [
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_14_project_BN/moving_variance",
                    "shape": [
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_expand_BN/moving_mean",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_expand_BN/moving_variance",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_depthwise_BN/moving_mean",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_depthwise_BN/moving_variance",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_project_BN/moving_mean",
                    "shape": [
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_15_project_BN/moving_variance",
                    "shape": [
                        56
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_expand_BN/moving_mean",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_expand_BN/moving_variance",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_depthwise_BN/moving_mean",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_depthwise_BN/moving_variance",
                    "shape": [
                        336
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_project_BN/moving_mean",
                    "shape": [
                        112
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "block_16_project_BN/moving_variance",
                    "shape": [
                        112
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "Conv_1_bn/moving_mean",
                    "shape": [
                        1280
                    ],
                    "dtype": "float32"
                },
                {
                    "name": "Conv_1_bn/moving_variance",
                    "shape": [
                        1280
                    ],
                    "dtype": "float32"
                }
            ]
        }
    ]
}

export default model;