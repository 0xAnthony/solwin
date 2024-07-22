import { Program } from '@coral-xyz/anchor';
import { PublicKey } from '@solana/web3.js';

var address = "G1ZkRWTyM46zZQjZ1U721iRtp7Rr14fBFhR5GHGcvHZB";
var metadata = {
    name: "solwin",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor"
};
var instructions = [
    {
        name: "burn_token",
        discriminator: [
            185,
            165,
            216,
            246,
            144,
            31,
            70,
            74
        ],
        accounts: [
            {
                name: "mint",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                105,
                                110,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "payer_mint_ata",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "account",
                            path: "payer"
                        },
                        {
                            kind: "const",
                            value: [
                                6,
                                221,
                                246,
                                225,
                                215,
                                101,
                                161,
                                147,
                                217,
                                203,
                                225,
                                70,
                                206,
                                235,
                                121,
                                172,
                                28,
                                180,
                                133,
                                237,
                                95,
                                91,
                                55,
                                145,
                                58,
                                140,
                                245,
                                133,
                                126,
                                255,
                                0,
                                169
                            ]
                        },
                        {
                            kind: "account",
                            path: "mint"
                        }
                    ],
                    program: {
                        kind: "const",
                        value: [
                            140,
                            151,
                            37,
                            143,
                            78,
                            36,
                            137,
                            241,
                            187,
                            61,
                            16,
                            41,
                            20,
                            142,
                            13,
                            131,
                            11,
                            90,
                            19,
                            153,
                            218,
                            255,
                            16,
                            132,
                            4,
                            142,
                            123,
                            216,
                            219,
                            233,
                            248,
                            89
                        ]
                    }
                }
            },
            {
                name: "payer",
                writable: true,
                signer: true
            },
            {
                name: "rent",
                address: "SysvarRent111111111111111111111111111111111"
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "token_program",
                address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            },
            {
                name: "associated_token_program",
                address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            }
        ],
        args: [
            {
                name: "amount",
                type: "u64"
            }
        ]
    },
    {
        name: "buy_ticket",
        discriminator: [
            11,
            24,
            17,
            193,
            168,
            116,
            164,
            169
        ],
        accounts: [
            {
                name: "lottery",
                writable: true
            },
            {
                name: "round",
                writable: true
            },
            {
                name: "ticket",
                writable: true
            },
            {
                name: "buyer",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            }
        ],
        args: [
            {
                name: "lottery_id",
                type: "u32"
            },
            {
                name: "round_id",
                type: "u32"
            }
        ]
    },
    {
        name: "close_round",
        discriminator: [
            149,
            14,
            81,
            88,
            230,
            226,
            234,
            37
        ],
        accounts: [
            {
                name: "lottery",
                writable: true
            },
            {
                name: "round",
                writable: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            }
        ],
        args: [
            {
                name: "lottery_id",
                type: "u32"
            },
            {
                name: "round_id",
                type: "u32"
            }
        ]
    },
    {
        name: "create_solwin_app",
        discriminator: [
            144,
            116,
            222,
            16,
            237,
            186,
            180,
            154
        ],
        accounts: [
            {
                name: "vault",
                docs: [
                    "Vault"
                ],
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                118,
                                97,
                                117,
                                108,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "user",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "metadata",
                docs: [
                    "Token"
                ],
                writable: true
            },
            {
                name: "mint",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                105,
                                110,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "payer",
                writable: true,
                signer: true
            },
            {
                name: "rent",
                address: "SysvarRent111111111111111111111111111111111"
            },
            {
                name: "token_program",
                address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            },
            {
                name: "token_metadata_program",
                address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
            }
        ],
        args: [
            {
                name: "metadata",
                type: {
                    defined: {
                        name: "InitTokenParams"
                    }
                }
            }
        ]
    },
    {
        name: "create_token",
        discriminator: [
            84,
            52,
            204,
            228,
            24,
            140,
            234,
            75
        ],
        accounts: [
            {
                name: "metadata",
                writable: true
            },
            {
                name: "mint",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                105,
                                110,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "payer",
                writable: true,
                signer: true
            },
            {
                name: "rent",
                address: "SysvarRent111111111111111111111111111111111"
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "token_program",
                address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            },
            {
                name: "token_metadata_program",
                address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
            }
        ],
        args: [
            {
                name: "metadata",
                type: {
                    defined: {
                        name: "InitTokenParams"
                    }
                }
            }
        ]
    },
    {
        name: "deposit_solwin",
        discriminator: [
            71,
            165,
            82,
            27,
            228,
            197,
            156,
            231
        ],
        accounts: [
            {
                name: "vault",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                118,
                                97,
                                117,
                                108,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "user",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            }
        ],
        args: [
            {
                name: "amount",
                type: "u64"
            }
        ]
    },
    {
        name: "deposit_solwin_app",
        discriminator: [
            37,
            195,
            35,
            70,
            1,
            3,
            172,
            193
        ],
        accounts: [
            {
                name: "vault",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                118,
                                97,
                                117,
                                108,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "user",
                writable: true,
                signer: true
            },
            {
                name: "mint",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                105,
                                110,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "payer_mint_ata",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "account",
                            path: "payer"
                        },
                        {
                            kind: "const",
                            value: [
                                6,
                                221,
                                246,
                                225,
                                215,
                                101,
                                161,
                                147,
                                217,
                                203,
                                225,
                                70,
                                206,
                                235,
                                121,
                                172,
                                28,
                                180,
                                133,
                                237,
                                95,
                                91,
                                55,
                                145,
                                58,
                                140,
                                245,
                                133,
                                126,
                                255,
                                0,
                                169
                            ]
                        },
                        {
                            kind: "account",
                            path: "mint"
                        }
                    ],
                    program: {
                        kind: "const",
                        value: [
                            140,
                            151,
                            37,
                            143,
                            78,
                            36,
                            137,
                            241,
                            187,
                            61,
                            16,
                            41,
                            20,
                            142,
                            13,
                            131,
                            11,
                            90,
                            19,
                            153,
                            218,
                            255,
                            16,
                            132,
                            4,
                            142,
                            123,
                            216,
                            219,
                            233,
                            248,
                            89
                        ]
                    }
                }
            },
            {
                name: "payer",
                writable: true,
                signer: true
            },
            {
                name: "rent",
                address: "SysvarRent111111111111111111111111111111111"
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "token_program",
                address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            },
            {
                name: "associated_token_program",
                address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            }
        ],
        args: [
            {
                name: "amount",
                type: "u64"
            }
        ]
    },
    {
        name: "f_claim_rewards",
        discriminator: [
            46,
            151,
            38,
            40,
            136,
            96,
            230,
            59
        ],
        accounts: [
            {
                name: "lottery",
                writable: true
            },
            {
                name: "user",
                writable: true,
                signer: true
            },
            {
                name: "user_data",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                117,
                                115,
                                101,
                                114,
                                51,
                                50
                            ]
                        },
                        {
                            kind: "account",
                            path: "lottery.id",
                            account: "FLottery"
                        },
                        {
                            kind: "account",
                            path: "signer"
                        }
                    ]
                }
            },
            {
                name: "signer",
                writable: true,
                signer: true
            },
            {
                name: "mint",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                105,
                                110,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "payer_mint_ata",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "account",
                            path: "payer"
                        },
                        {
                            kind: "const",
                            value: [
                                6,
                                221,
                                246,
                                225,
                                215,
                                101,
                                161,
                                147,
                                217,
                                203,
                                225,
                                70,
                                206,
                                235,
                                121,
                                172,
                                28,
                                180,
                                133,
                                237,
                                95,
                                91,
                                55,
                                145,
                                58,
                                140,
                                245,
                                133,
                                126,
                                255,
                                0,
                                169
                            ]
                        },
                        {
                            kind: "account",
                            path: "mint"
                        }
                    ],
                    program: {
                        kind: "const",
                        value: [
                            140,
                            151,
                            37,
                            143,
                            78,
                            36,
                            137,
                            241,
                            187,
                            61,
                            16,
                            41,
                            20,
                            142,
                            13,
                            131,
                            11,
                            90,
                            19,
                            153,
                            218,
                            255,
                            16,
                            132,
                            4,
                            142,
                            123,
                            216,
                            219,
                            233,
                            248,
                            89
                        ]
                    }
                }
            },
            {
                name: "payer",
                writable: true,
                signer: true
            },
            {
                name: "rent",
                address: "SysvarRent111111111111111111111111111111111"
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "token_program",
                address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            },
            {
                name: "associated_token_program",
                address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            }
        ],
        args: []
    },
    {
        name: "f_close_round",
        discriminator: [
            76,
            211,
            215,
            2,
            213,
            205,
            239,
            227
        ],
        accounts: [
            {
                name: "lottery",
                writable: true
            },
            {
                name: "round",
                writable: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "closer_data",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                117,
                                115,
                                101,
                                114,
                                51,
                                50
                            ]
                        },
                        {
                            kind: "account",
                            path: "lottery.id",
                            account: "FLottery"
                        },
                        {
                            kind: "account",
                            path: "signer"
                        }
                    ]
                }
            },
            {
                name: "authority",
                writable: true,
                signer: true
            },
            {
                name: "signer",
                signer: true
            },
            {
                name: "next_round",
                writable: true
            }
        ],
        args: [
            {
                name: "lottery_id",
                type: "u32"
            },
            {
                name: "round_id",
                type: "u32"
            }
        ]
    },
    {
        name: "f_deposit",
        discriminator: [
            125,
            122,
            115,
            175,
            166,
            150,
            59,
            162
        ],
        accounts: [
            {
                name: "lottery",
                writable: true
            },
            {
                name: "vault",
                writable: true
            },
            {
                name: "user",
                writable: true,
                signer: true
            },
            {
                name: "user_data",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                117,
                                115,
                                101,
                                114,
                                51,
                                50
                            ]
                        },
                        {
                            kind: "account",
                            path: "lottery.id",
                            account: "FLottery"
                        },
                        {
                            kind: "account",
                            path: "signer"
                        }
                    ]
                }
            },
            {
                name: "signer",
                writable: true,
                signer: true
            },
            {
                name: "mint",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                105,
                                110,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "payer_mint_ata",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "account",
                            path: "payer"
                        },
                        {
                            kind: "const",
                            value: [
                                6,
                                221,
                                246,
                                225,
                                215,
                                101,
                                161,
                                147,
                                217,
                                203,
                                225,
                                70,
                                206,
                                235,
                                121,
                                172,
                                28,
                                180,
                                133,
                                237,
                                95,
                                91,
                                55,
                                145,
                                58,
                                140,
                                245,
                                133,
                                126,
                                255,
                                0,
                                169
                            ]
                        },
                        {
                            kind: "account",
                            path: "mint"
                        }
                    ],
                    program: {
                        kind: "const",
                        value: [
                            140,
                            151,
                            37,
                            143,
                            78,
                            36,
                            137,
                            241,
                            187,
                            61,
                            16,
                            41,
                            20,
                            142,
                            13,
                            131,
                            11,
                            90,
                            19,
                            153,
                            218,
                            255,
                            16,
                            132,
                            4,
                            142,
                            123,
                            216,
                            219,
                            233,
                            248,
                            89
                        ]
                    }
                }
            },
            {
                name: "payer",
                writable: true,
                signer: true
            },
            {
                name: "rent",
                address: "SysvarRent111111111111111111111111111111111"
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "token_program",
                address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            },
            {
                name: "associated_token_program",
                address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            }
        ],
        args: [
            {
                name: "lottery_id",
                type: "u32"
            },
            {
                name: "amount",
                type: "u64"
            }
        ]
    },
    {
        name: "f_initialize_lottery",
        discriminator: [
            130,
            18,
            97,
            254,
            171,
            194,
            111,
            71
        ],
        accounts: [
            {
                name: "master_lottery",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                97,
                                115,
                                116,
                                101,
                                114,
                                95,
                                108,
                                111,
                                116,
                                116,
                                101,
                                114,
                                121,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "vault",
                writable: true
            },
            {
                name: "lottery",
                writable: true
            },
            {
                name: "authority",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "user",
                writable: true,
                signer: true
            }
        ],
        args: [
            {
                name: "ticket_price",
                type: "u64"
            },
            {
                name: "round_duration",
                type: "i64"
            },
            {
                name: "round_close_slot",
                type: "i64"
            }
        ]
    },
    {
        name: "f_initialize_round",
        discriminator: [
            171,
            70,
            194,
            94,
            189,
            29,
            97,
            31
        ],
        accounts: [
            {
                name: "round",
                writable: true
            },
            {
                name: "lottery",
                writable: true
            },
            {
                name: "authority",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            }
        ],
        args: []
    },
    {
        name: "f_initialize_solwin",
        discriminator: [
            143,
            97,
            136,
            142,
            26,
            62,
            127,
            133
        ],
        accounts: [
            {
                name: "user",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "master_lottery",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                97,
                                115,
                                116,
                                101,
                                114,
                                95,
                                108,
                                111,
                                116,
                                116,
                                101,
                                114,
                                121,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "metadata",
                docs: [
                    "Token"
                ],
                writable: true
            },
            {
                name: "mint",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                105,
                                110,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "payer",
                writable: true,
                signer: true
            },
            {
                name: "rent",
                address: "SysvarRent111111111111111111111111111111111"
            },
            {
                name: "token_program",
                address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            },
            {
                name: "token_metadata_program",
                address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
            }
        ],
        args: [
            {
                name: "metadata",
                type: {
                    defined: {
                        name: "InitTokenParams"
                    }
                }
            }
        ]
    },
    {
        name: "f_take_ticket",
        discriminator: [
            222,
            135,
            105,
            175,
            244,
            16,
            181,
            209
        ],
        accounts: [
            {
                name: "lottery",
                writable: true
            },
            {
                name: "round",
                writable: true
            },
            {
                name: "ticket",
                writable: true
            },
            {
                name: "buyer",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "user_data",
                writable: true
            }
        ],
        args: [
            {
                name: "lottery_id",
                type: "u32"
            },
            {
                name: "round_id",
                type: "u32"
            }
        ]
    },
    {
        name: "f_withdraw",
        discriminator: [
            71,
            91,
            209,
            224,
            64,
            102,
            4,
            179
        ],
        accounts: [
            {
                name: "lottery",
                writable: true
            },
            {
                name: "vault",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                118,
                                97,
                                117,
                                108,
                                116,
                                51,
                                50
                            ]
                        },
                        {
                            kind: "account",
                            path: "lottery.id",
                            account: "FLottery"
                        }
                    ]
                }
            },
            {
                name: "user",
                writable: true,
                signer: true
            },
            {
                name: "user_data",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                117,
                                115,
                                101,
                                114,
                                51,
                                50
                            ]
                        },
                        {
                            kind: "account",
                            path: "lottery.id",
                            account: "FLottery"
                        },
                        {
                            kind: "account",
                            path: "signer"
                        }
                    ]
                }
            },
            {
                name: "signer",
                writable: true,
                signer: true
            },
            {
                name: "mint",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                105,
                                110,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "payer_mint_ata",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "account",
                            path: "payer"
                        },
                        {
                            kind: "const",
                            value: [
                                6,
                                221,
                                246,
                                225,
                                215,
                                101,
                                161,
                                147,
                                217,
                                203,
                                225,
                                70,
                                206,
                                235,
                                121,
                                172,
                                28,
                                180,
                                133,
                                237,
                                95,
                                91,
                                55,
                                145,
                                58,
                                140,
                                245,
                                133,
                                126,
                                255,
                                0,
                                169
                            ]
                        },
                        {
                            kind: "account",
                            path: "mint"
                        }
                    ],
                    program: {
                        kind: "const",
                        value: [
                            140,
                            151,
                            37,
                            143,
                            78,
                            36,
                            137,
                            241,
                            187,
                            61,
                            16,
                            41,
                            20,
                            142,
                            13,
                            131,
                            11,
                            90,
                            19,
                            153,
                            218,
                            255,
                            16,
                            132,
                            4,
                            142,
                            123,
                            216,
                            219,
                            233,
                            248,
                            89
                        ]
                    }
                }
            },
            {
                name: "payer",
                writable: true,
                signer: true
            },
            {
                name: "rent",
                address: "SysvarRent111111111111111111111111111111111"
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "token_program",
                address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            },
            {
                name: "associated_token_program",
                address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            }
        ],
        args: [
            {
                name: "lottery_id",
                type: "u32"
            },
            {
                name: "amount",
                type: "u64"
            }
        ]
    },
    {
        name: "generate_xorshift32",
        discriminator: [
            6,
            150,
            132,
            192,
            178,
            95,
            230,
            92
        ],
        accounts: [
            {
                name: "rng_account",
                writable: true
            }
        ],
        args: [],
        returns: "u32"
    },
    {
        name: "generate_xorshift64",
        discriminator: [
            121,
            42,
            217,
            127,
            230,
            66,
            248,
            168
        ],
        accounts: [
            {
                name: "rng_account",
                writable: true
            }
        ],
        args: [],
        returns: "u64"
    },
    {
        name: "generate_xorshift64_f64",
        discriminator: [
            221,
            241,
            94,
            43,
            174,
            252,
            23,
            183
        ],
        accounts: [
            {
                name: "rng_account",
                writable: true
            }
        ],
        args: [],
        returns: "f64"
    },
    {
        name: "get_exchange_rate",
        discriminator: [
            153,
            76,
            17,
            194,
            170,
            215,
            89,
            142
        ],
        accounts: [
            {
                name: "reserve_account"
            }
        ],
        args: [],
        returns: "u64"
    },
    {
        name: "init_xorshift",
        discriminator: [
            200,
            212,
            178,
            199,
            43,
            55,
            162,
            5
        ],
        accounts: [
            {
                name: "rng_account",
                writable: true,
                signer: true
            },
            {
                name: "user",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            }
        ],
        args: [
            {
                name: "seed32",
                type: "u32"
            },
            {
                name: "seed64",
                type: "u64"
            }
        ]
    },
    {
        name: "initialize_lottery",
        discriminator: [
            113,
            199,
            243,
            247,
            73,
            217,
            33,
            11
        ],
        accounts: [
            {
                name: "lottery",
                writable: true
            },
            {
                name: "master_lottery",
                writable: true
            },
            {
                name: "authority",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            }
        ],
        args: [
            {
                name: "ticket_price",
                type: "u64"
            },
            {
                name: "round_duration",
                type: "i64"
            },
            {
                name: "round_close_slot",
                type: "i64"
            }
        ]
    },
    {
        name: "initialize_master_lottery",
        discriminator: [
            230,
            251,
            20,
            10,
            95,
            194,
            15,
            34
        ],
        accounts: [
            {
                name: "master_lottery",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                97,
                                115,
                                116,
                                101,
                                114,
                                95,
                                108,
                                111,
                                116,
                                116,
                                101,
                                114,
                                121,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "payer",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            }
        ],
        args: []
    },
    {
        name: "initialize_round",
        discriminator: [
            43,
            135,
            19,
            93,
            14,
            225,
            131,
            188
        ],
        accounts: [
            {
                name: "round",
                writable: true
            },
            {
                name: "lottery",
                writable: true
            },
            {
                name: "authority",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            }
        ],
        args: []
    },
    {
        name: "initialize_solwin",
        discriminator: [
            129,
            38,
            131,
            12,
            164,
            70,
            103,
            134
        ],
        accounts: [
            {
                name: "vault",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                118,
                                97,
                                117,
                                108,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "user",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            }
        ],
        args: []
    },
    {
        name: "mint_token",
        discriminator: [
            172,
            137,
            183,
            14,
            207,
            110,
            234,
            56
        ],
        accounts: [
            {
                name: "mint",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                105,
                                110,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "payer_mint_ata",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "account",
                            path: "payer"
                        },
                        {
                            kind: "const",
                            value: [
                                6,
                                221,
                                246,
                                225,
                                215,
                                101,
                                161,
                                147,
                                217,
                                203,
                                225,
                                70,
                                206,
                                235,
                                121,
                                172,
                                28,
                                180,
                                133,
                                237,
                                95,
                                91,
                                55,
                                145,
                                58,
                                140,
                                245,
                                133,
                                126,
                                255,
                                0,
                                169
                            ]
                        },
                        {
                            kind: "account",
                            path: "mint"
                        }
                    ],
                    program: {
                        kind: "const",
                        value: [
                            140,
                            151,
                            37,
                            143,
                            78,
                            36,
                            137,
                            241,
                            187,
                            61,
                            16,
                            41,
                            20,
                            142,
                            13,
                            131,
                            11,
                            90,
                            19,
                            153,
                            218,
                            255,
                            16,
                            132,
                            4,
                            142,
                            123,
                            216,
                            219,
                            233,
                            248,
                            89
                        ]
                    }
                }
            },
            {
                name: "payer",
                writable: true,
                signer: true
            },
            {
                name: "rent",
                address: "SysvarRent111111111111111111111111111111111"
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "token_program",
                address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            },
            {
                name: "associated_token_program",
                address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            }
        ],
        args: [
            {
                name: "amount",
                type: "u64"
            }
        ]
    },
    {
        name: "withdraw_solwin",
        discriminator: [
            30,
            155,
            238,
            214,
            220,
            144,
            9,
            191
        ],
        accounts: [
            {
                name: "vault",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                118,
                                97,
                                117,
                                108,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "user",
                writable: true,
                signer: true
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            }
        ],
        args: [
            {
                name: "amount",
                type: "u64"
            }
        ]
    },
    {
        name: "withdraw_solwin_app",
        discriminator: [
            185,
            211,
            253,
            30,
            170,
            85,
            18,
            25
        ],
        accounts: [
            {
                name: "vault",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                118,
                                97,
                                117,
                                108,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "user",
                writable: true,
                signer: true
            },
            {
                name: "mint",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "const",
                            value: [
                                109,
                                105,
                                110,
                                116,
                                51,
                                50
                            ]
                        }
                    ]
                }
            },
            {
                name: "payer_mint_ata",
                writable: true,
                pda: {
                    seeds: [
                        {
                            kind: "account",
                            path: "payer"
                        },
                        {
                            kind: "const",
                            value: [
                                6,
                                221,
                                246,
                                225,
                                215,
                                101,
                                161,
                                147,
                                217,
                                203,
                                225,
                                70,
                                206,
                                235,
                                121,
                                172,
                                28,
                                180,
                                133,
                                237,
                                95,
                                91,
                                55,
                                145,
                                58,
                                140,
                                245,
                                133,
                                126,
                                255,
                                0,
                                169
                            ]
                        },
                        {
                            kind: "account",
                            path: "mint"
                        }
                    ],
                    program: {
                        kind: "const",
                        value: [
                            140,
                            151,
                            37,
                            143,
                            78,
                            36,
                            137,
                            241,
                            187,
                            61,
                            16,
                            41,
                            20,
                            142,
                            13,
                            131,
                            11,
                            90,
                            19,
                            153,
                            218,
                            255,
                            16,
                            132,
                            4,
                            142,
                            123,
                            216,
                            219,
                            233,
                            248,
                            89
                        ]
                    }
                }
            },
            {
                name: "payer",
                writable: true,
                signer: true
            },
            {
                name: "rent",
                address: "SysvarRent111111111111111111111111111111111"
            },
            {
                name: "system_program",
                address: "11111111111111111111111111111111"
            },
            {
                name: "token_program",
                address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            },
            {
                name: "associated_token_program",
                address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            }
        ],
        args: [
            {
                name: "amount",
                type: "u64"
            }
        ]
    }
];
var accounts = [
    {
        name: "FLottery",
        discriminator: [
            134,
            109,
            151,
            21,
            221,
            59,
            47,
            177
        ]
    },
    {
        name: "FMasterLottery",
        discriminator: [
            239,
            219,
            252,
            34,
            153,
            89,
            111,
            131
        ]
    },
    {
        name: "FRound",
        discriminator: [
            147,
            82,
            213,
            144,
            218,
            41,
            104,
            153
        ]
    },
    {
        name: "FTicket",
        discriminator: [
            250,
            164,
            116,
            219,
            41,
            39,
            170,
            222
        ]
    },
    {
        name: "FVault",
        discriminator: [
            95,
            27,
            165,
            136,
            239,
            243,
            172,
            199
        ]
    },
    {
        name: "Lottery",
        discriminator: [
            162,
            182,
            26,
            12,
            164,
            214,
            112,
            3
        ]
    },
    {
        name: "MasterLottery",
        discriminator: [
            66,
            171,
            237,
            152,
            10,
            184,
            77,
            116
        ]
    },
    {
        name: "RngAccount",
        discriminator: [
            21,
            194,
            30,
            140,
            238,
            67,
            180,
            10
        ]
    },
    {
        name: "Round",
        discriminator: [
            87,
            127,
            165,
            51,
            73,
            78,
            116,
            174
        ]
    },
    {
        name: "Ticket",
        discriminator: [
            41,
            228,
            24,
            165,
            78,
            90,
            235,
            200
        ]
    },
    {
        name: "UserData",
        discriminator: [
            139,
            248,
            167,
            203,
            253,
            220,
            210,
            221
        ]
    },
    {
        name: "Vault",
        discriminator: [
            211,
            8,
            232,
            43,
            2,
            152,
            117,
            119
        ]
    }
];
var errors = [
    {
        code: 6000,
        name: "WinnerAlreadyExists",
        msg: "Winner already exists"
    },
    {
        code: 6001,
        name: "RoundNotOpen",
        msg: "Round not open"
    },
    {
        code: 6002,
        name: "InvalidLotteryId",
        msg: "Invalid lottery id"
    },
    {
        code: 6003,
        name: "InvalidRoundId",
        msg: "Invalid round id"
    },
    {
        code: 6004,
        name: "RoundNotCloseable",
        msg: "Round not closeable"
    },
    {
        code: 6005,
        name: "InvalidAccount",
        msg: "Invalid lottery account"
    },
    {
        code: 6006,
        name: "NotUserDataOWner",
        msg: "Signer not user data owner"
    },
    {
        code: 6007,
        name: "NotEnoughCredits",
        msg: "Not enough credits"
    },
    {
        code: 6008,
        name: "WinnerDataNotFound",
        msg: "Winner Data Not Found"
    },
    {
        code: 6009,
        name: "RoundCreationFailed",
        msg: "Round Creation Failed"
    },
    {
        code: 6010,
        name: "WinnerTicketNotFound",
        msg: "Winner Ticket Not Found"
    }
];
var types = [
    {
        name: "FLottery",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "id",
                    type: "u32"
                },
                {
                    name: "authority",
                    type: "pubkey"
                },
                {
                    name: "ticket_price",
                    type: "u64"
                },
                {
                    name: "last_round_id",
                    type: "u32"
                },
                {
                    name: "round_duration",
                    type: "i64"
                },
                {
                    name: "round_close_slot",
                    type: "i64"
                },
                {
                    name: "bump",
                    type: "u8"
                }
            ]
        }
    },
    {
        name: "FMasterLottery",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "last_lottery_id",
                    type: "u32"
                }
            ]
        }
    },
    {
        name: "FRound",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "id",
                    type: "u32"
                },
                {
                    name: "authority",
                    type: "pubkey"
                },
                {
                    name: "lottery_id",
                    type: "u32"
                },
                {
                    name: "ticket_price",
                    type: "u64"
                },
                {
                    name: "last_ticket_id",
                    type: "u32"
                },
                {
                    name: "start_time",
                    type: "i64"
                },
                {
                    name: "close_target",
                    type: "i64"
                },
                {
                    name: "min_close_time",
                    type: "i64"
                },
                {
                    name: "max_close_time",
                    type: "i64"
                },
                {
                    name: "status",
                    type: {
                        defined: {
                            name: "FRoundStatus"
                        }
                    }
                },
                {
                    name: "winner_id",
                    type: {
                        option: "u32"
                    }
                },
                {
                    name: "reward",
                    type: "u64"
                }
            ]
        }
    },
    {
        name: "FRoundStatus",
        type: {
            kind: "enum",
            variants: [
                {
                    name: "Init"
                },
                {
                    name: "Open"
                },
                {
                    name: "Finished"
                },
                {
                    name: "Closed"
                }
            ]
        }
    },
    {
        name: "FTicket",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "id",
                    type: "u32"
                },
                {
                    name: "lottery_id",
                    type: "u32"
                },
                {
                    name: "round_id",
                    type: "u32"
                },
                {
                    name: "authority",
                    type: "pubkey"
                },
                {
                    name: "winner_reward",
                    type: "u64"
                },
                {
                    name: "claimed",
                    type: "bool"
                }
            ]
        }
    },
    {
        name: "FVault",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "sol_balance",
                    type: "u64"
                },
                {
                    name: "token_balance",
                    type: "u64"
                }
            ]
        }
    },
    {
        name: "InitTokenParams",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "name",
                    type: "string"
                },
                {
                    name: "symbol",
                    type: "string"
                },
                {
                    name: "uri",
                    type: "string"
                },
                {
                    name: "decimals",
                    type: "u8"
                }
            ]
        }
    },
    {
        name: "Lottery",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "id",
                    type: "u32"
                },
                {
                    name: "authority",
                    type: "pubkey"
                },
                {
                    name: "ticket_price",
                    type: "u64"
                },
                {
                    name: "last_round_id",
                    type: "u32"
                },
                {
                    name: "round_duration",
                    type: "i64"
                },
                {
                    name: "round_close_slot",
                    type: "i64"
                }
            ]
        }
    },
    {
        name: "MasterLottery",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "last_lottery_id",
                    type: "u32"
                }
            ]
        }
    },
    {
        name: "RngAccount",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "xorshift32",
                    type: {
                        defined: {
                            name: "Xorshift32"
                        }
                    }
                },
                {
                    name: "xorshift64",
                    type: {
                        defined: {
                            name: "Xorshift64"
                        }
                    }
                }
            ]
        }
    },
    {
        name: "Round",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "id",
                    type: "u32"
                },
                {
                    name: "authority",
                    type: "pubkey"
                },
                {
                    name: "lottery_id",
                    type: "u32"
                },
                {
                    name: "ticket_price",
                    type: "u64"
                },
                {
                    name: "last_ticket_id",
                    type: "u32"
                },
                {
                    name: "start_time",
                    type: "i64"
                },
                {
                    name: "close_target",
                    type: "i64"
                },
                {
                    name: "min_close_time",
                    type: "i64"
                },
                {
                    name: "max_close_time",
                    type: "i64"
                },
                {
                    name: "status",
                    type: {
                        defined: {
                            name: "RoundStatus"
                        }
                    }
                },
                {
                    name: "winner_id",
                    type: {
                        option: "u32"
                    }
                }
            ]
        }
    },
    {
        name: "RoundStatus",
        type: {
            kind: "enum",
            variants: [
                {
                    name: "Init"
                },
                {
                    name: "Open"
                },
                {
                    name: "Finished"
                },
                {
                    name: "Closed"
                }
            ]
        }
    },
    {
        name: "Ticket",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "id",
                    type: "u32"
                },
                {
                    name: "lottery_id",
                    type: "u32"
                },
                {
                    name: "round_id",
                    type: "u32"
                },
                {
                    name: "authority",
                    type: "pubkey"
                }
            ]
        }
    },
    {
        name: "UserData",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "credits",
                    type: "u64"
                },
                {
                    name: "rewards",
                    type: "u64"
                },
                {
                    name: "owner",
                    type: "pubkey"
                }
            ]
        }
    },
    {
        name: "Vault",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "sol_balance",
                    type: "u64"
                },
                {
                    name: "token_balance",
                    type: "u64"
                }
            ]
        }
    },
    {
        name: "Xorshift32",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "state",
                    type: "u32"
                }
            ]
        }
    },
    {
        name: "Xorshift64",
        type: {
            kind: "struct",
            fields: [
                {
                    name: "state",
                    type: "u64"
                }
            ]
        }
    }
];
var solwinIDL = {
    address: address,
    metadata: metadata,
    instructions: instructions,
    accounts: accounts,
    errors: errors,
    types: types
};

// Here we export some useful types and functions for interacting with the Anchor program.
// The programId is imported from the program IDL.
const solwin_PROGRAM_ID = new PublicKey(solwinIDL.address);
// This is a helper function to get the solwin Anchor program.
function getsolwinProgram(provider) {
    return new Program(solwinIDL, provider);
}
// This is a helper function to get the program ID for the solwin program depending on the cluster.
function getsolwinProgramId(cluster) {
    switch(cluster){
        case 'devnet':
        case 'testnet':
            // This is the program ID for the solwin program on devnet and testnet.
            return new PublicKey('ETMR2uxTjbFDYrhaQcPRJZyAYNDdSDcuCDg4doTvqPXv');
        case 'mainnet-beta':
        default:
            return solwin_PROGRAM_ID;
    }
}

export { getsolwinProgram, getsolwinProgramId, solwinIDL, solwin_PROGRAM_ID };
