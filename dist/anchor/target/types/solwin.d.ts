/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/solwin.json`.
 */
export type Solwin = {
    "address": "G1ZkRWTyM46zZQjZ1U721iRtp7Rr14fBFhR5GHGcvHZB";
    "metadata": {
        "name": "solwin";
        "version": "0.1.0";
        "spec": "0.1.0";
        "description": "Created with Anchor";
    };
    "instructions": [
        {
            "name": "burnToken";
            "discriminator": [
                185,
                165,
                216,
                246,
                144,
                31,
                70,
                74
            ];
            "accounts": [
                {
                    "name": "mint";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    109,
                                    105,
                                    110,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "payerMintAta";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account";
                                "path": "payer";
                            },
                            {
                                "kind": "const";
                                "value": [
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
                                ];
                            },
                            {
                                "kind": "account";
                                "path": "mint";
                            }
                        ];
                        "program": {
                            "kind": "const";
                            "value": [
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
                            ];
                        };
                    };
                },
                {
                    "name": "payer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "rent";
                    "address": "SysvarRent111111111111111111111111111111111";
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "tokenProgram";
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
                },
                {
                    "name": "associatedTokenProgram";
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
                }
            ];
            "args": [
                {
                    "name": "amount";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "buyTicket";
            "discriminator": [
                11,
                24,
                17,
                193,
                168,
                116,
                164,
                169
            ];
            "accounts": [
                {
                    "name": "lottery";
                    "writable": true;
                },
                {
                    "name": "round";
                    "writable": true;
                },
                {
                    "name": "ticket";
                    "writable": true;
                },
                {
                    "name": "buyer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                }
            ];
            "args": [
                {
                    "name": "lotteryId";
                    "type": "u32";
                },
                {
                    "name": "roundId";
                    "type": "u32";
                }
            ];
        },
        {
            "name": "closeRound";
            "discriminator": [
                149,
                14,
                81,
                88,
                230,
                226,
                234,
                37
            ];
            "accounts": [
                {
                    "name": "lottery";
                    "writable": true;
                },
                {
                    "name": "round";
                    "writable": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                }
            ];
            "args": [
                {
                    "name": "lotteryId";
                    "type": "u32";
                },
                {
                    "name": "roundId";
                    "type": "u32";
                }
            ];
        },
        {
            "name": "createSolwinApp";
            "discriminator": [
                144,
                116,
                222,
                16,
                237,
                186,
                180,
                154
            ];
            "accounts": [
                {
                    "name": "vault";
                    "docs": [
                        "vault"
                    ];
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    118,
                                    97,
                                    117,
                                    108,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "user";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "metadata";
                    "docs": [
                        "Token"
                    ];
                    "writable": true;
                },
                {
                    "name": "mint";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    109,
                                    105,
                                    110,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "payer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "rent";
                    "address": "SysvarRent111111111111111111111111111111111";
                },
                {
                    "name": "tokenProgram";
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
                },
                {
                    "name": "tokenMetadataProgram";
                    "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
                }
            ];
            "args": [
                {
                    "name": "metadata";
                    "type": {
                        "defined": {
                            "name": "initTokenParams";
                        };
                    };
                }
            ];
        },
        {
            "name": "createToken";
            "discriminator": [
                84,
                52,
                204,
                228,
                24,
                140,
                234,
                75
            ];
            "accounts": [
                {
                    "name": "metadata";
                    "writable": true;
                },
                {
                    "name": "mint";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    109,
                                    105,
                                    110,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "payer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "rent";
                    "address": "SysvarRent111111111111111111111111111111111";
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "tokenProgram";
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
                },
                {
                    "name": "tokenMetadataProgram";
                    "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
                }
            ];
            "args": [
                {
                    "name": "metadata";
                    "type": {
                        "defined": {
                            "name": "initTokenParams";
                        };
                    };
                }
            ];
        },
        {
            "name": "depositSolwin";
            "discriminator": [
                71,
                165,
                82,
                27,
                228,
                197,
                156,
                231
            ];
            "accounts": [
                {
                    "name": "vault";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    118,
                                    97,
                                    117,
                                    108,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "user";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                }
            ];
            "args": [
                {
                    "name": "amount";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "depositSolwinApp";
            "discriminator": [
                37,
                195,
                35,
                70,
                1,
                3,
                172,
                193
            ];
            "accounts": [
                {
                    "name": "vault";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    118,
                                    97,
                                    117,
                                    108,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "user";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "mint";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    109,
                                    105,
                                    110,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "payerMintAta";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account";
                                "path": "payer";
                            },
                            {
                                "kind": "const";
                                "value": [
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
                                ];
                            },
                            {
                                "kind": "account";
                                "path": "mint";
                            }
                        ];
                        "program": {
                            "kind": "const";
                            "value": [
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
                            ];
                        };
                    };
                },
                {
                    "name": "payer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "rent";
                    "address": "SysvarRent111111111111111111111111111111111";
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "tokenProgram";
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
                },
                {
                    "name": "associatedTokenProgram";
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
                }
            ];
            "args": [
                {
                    "name": "amount";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "fClaimRewards";
            "discriminator": [
                46,
                151,
                38,
                40,
                136,
                96,
                230,
                59
            ];
            "accounts": [
                {
                    "name": "lottery";
                    "writable": true;
                },
                {
                    "name": "user";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "userData";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    117,
                                    115,
                                    101,
                                    114,
                                    51,
                                    50
                                ];
                            },
                            {
                                "kind": "account";
                                "path": "lottery.id";
                                "account": "fLottery";
                            },
                            {
                                "kind": "account";
                                "path": "signer";
                            }
                        ];
                    };
                },
                {
                    "name": "signer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "mint";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    109,
                                    105,
                                    110,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "payerMintAta";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account";
                                "path": "payer";
                            },
                            {
                                "kind": "const";
                                "value": [
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
                                ];
                            },
                            {
                                "kind": "account";
                                "path": "mint";
                            }
                        ];
                        "program": {
                            "kind": "const";
                            "value": [
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
                            ];
                        };
                    };
                },
                {
                    "name": "payer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "rent";
                    "address": "SysvarRent111111111111111111111111111111111";
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "tokenProgram";
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
                },
                {
                    "name": "associatedTokenProgram";
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
                }
            ];
            "args": [];
        },
        {
            "name": "fCloseRound";
            "discriminator": [
                76,
                211,
                215,
                2,
                213,
                205,
                239,
                227
            ];
            "accounts": [
                {
                    "name": "lottery";
                    "writable": true;
                },
                {
                    "name": "round";
                    "writable": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "closerData";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    117,
                                    115,
                                    101,
                                    114,
                                    51,
                                    50
                                ];
                            },
                            {
                                "kind": "account";
                                "path": "lottery.id";
                                "account": "fLottery";
                            },
                            {
                                "kind": "account";
                                "path": "signer";
                            }
                        ];
                    };
                },
                {
                    "name": "authority";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "signer";
                    "signer": true;
                },
                {
                    "name": "nextRound";
                    "writable": true;
                }
            ];
            "args": [
                {
                    "name": "lotteryId";
                    "type": "u32";
                },
                {
                    "name": "roundId";
                    "type": "u32";
                }
            ];
        },
        {
            "name": "fDeposit";
            "discriminator": [
                125,
                122,
                115,
                175,
                166,
                150,
                59,
                162
            ];
            "accounts": [
                {
                    "name": "lottery";
                    "writable": true;
                },
                {
                    "name": "vault";
                    "writable": true;
                },
                {
                    "name": "user";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "userData";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    117,
                                    115,
                                    101,
                                    114,
                                    51,
                                    50
                                ];
                            },
                            {
                                "kind": "account";
                                "path": "lottery.id";
                                "account": "fLottery";
                            },
                            {
                                "kind": "account";
                                "path": "signer";
                            }
                        ];
                    };
                },
                {
                    "name": "signer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "mint";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    109,
                                    105,
                                    110,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "payerMintAta";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account";
                                "path": "payer";
                            },
                            {
                                "kind": "const";
                                "value": [
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
                                ];
                            },
                            {
                                "kind": "account";
                                "path": "mint";
                            }
                        ];
                        "program": {
                            "kind": "const";
                            "value": [
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
                            ];
                        };
                    };
                },
                {
                    "name": "payer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "rent";
                    "address": "SysvarRent111111111111111111111111111111111";
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "tokenProgram";
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
                },
                {
                    "name": "associatedTokenProgram";
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
                }
            ];
            "args": [
                {
                    "name": "lotteryId";
                    "type": "u32";
                },
                {
                    "name": "amount";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "fInitializeLottery";
            "discriminator": [
                130,
                18,
                97,
                254,
                171,
                194,
                111,
                71
            ];
            "accounts": [
                {
                    "name": "masterLottery";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
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
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "vault";
                    "writable": true;
                },
                {
                    "name": "lottery";
                    "writable": true;
                },
                {
                    "name": "authority";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "user";
                    "writable": true;
                    "signer": true;
                }
            ];
            "args": [
                {
                    "name": "ticketPrice";
                    "type": "u64";
                },
                {
                    "name": "roundDuration";
                    "type": "i64";
                },
                {
                    "name": "roundCloseSlot";
                    "type": "i64";
                }
            ];
        },
        {
            "name": "fInitializeRound";
            "discriminator": [
                171,
                70,
                194,
                94,
                189,
                29,
                97,
                31
            ];
            "accounts": [
                {
                    "name": "round";
                    "writable": true;
                },
                {
                    "name": "lottery";
                    "writable": true;
                },
                {
                    "name": "authority";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                }
            ];
            "args": [];
        },
        {
            "name": "fInitializeSolwin";
            "discriminator": [
                143,
                97,
                136,
                142,
                26,
                62,
                127,
                133
            ];
            "accounts": [
                {
                    "name": "user";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "masterLottery";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
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
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "metadata";
                    "docs": [
                        "Token"
                    ];
                    "writable": true;
                },
                {
                    "name": "mint";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    109,
                                    105,
                                    110,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "payer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "rent";
                    "address": "SysvarRent111111111111111111111111111111111";
                },
                {
                    "name": "tokenProgram";
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
                },
                {
                    "name": "tokenMetadataProgram";
                    "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
                }
            ];
            "args": [
                {
                    "name": "metadata";
                    "type": {
                        "defined": {
                            "name": "initTokenParams";
                        };
                    };
                }
            ];
        },
        {
            "name": "fTakeTicket";
            "discriminator": [
                222,
                135,
                105,
                175,
                244,
                16,
                181,
                209
            ];
            "accounts": [
                {
                    "name": "lottery";
                    "writable": true;
                },
                {
                    "name": "round";
                    "writable": true;
                },
                {
                    "name": "ticket";
                    "writable": true;
                },
                {
                    "name": "buyer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "userData";
                    "writable": true;
                }
            ];
            "args": [
                {
                    "name": "lotteryId";
                    "type": "u32";
                },
                {
                    "name": "roundId";
                    "type": "u32";
                }
            ];
        },
        {
            "name": "fWithdraw";
            "discriminator": [
                71,
                91,
                209,
                224,
                64,
                102,
                4,
                179
            ];
            "accounts": [
                {
                    "name": "lottery";
                    "writable": true;
                },
                {
                    "name": "vault";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    118,
                                    97,
                                    117,
                                    108,
                                    116,
                                    51,
                                    50
                                ];
                            },
                            {
                                "kind": "account";
                                "path": "lottery.id";
                                "account": "fLottery";
                            }
                        ];
                    };
                },
                {
                    "name": "user";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "userData";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    117,
                                    115,
                                    101,
                                    114,
                                    51,
                                    50
                                ];
                            },
                            {
                                "kind": "account";
                                "path": "lottery.id";
                                "account": "fLottery";
                            },
                            {
                                "kind": "account";
                                "path": "signer";
                            }
                        ];
                    };
                },
                {
                    "name": "signer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "mint";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    109,
                                    105,
                                    110,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "payerMintAta";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account";
                                "path": "payer";
                            },
                            {
                                "kind": "const";
                                "value": [
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
                                ];
                            },
                            {
                                "kind": "account";
                                "path": "mint";
                            }
                        ];
                        "program": {
                            "kind": "const";
                            "value": [
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
                            ];
                        };
                    };
                },
                {
                    "name": "payer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "rent";
                    "address": "SysvarRent111111111111111111111111111111111";
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "tokenProgram";
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
                },
                {
                    "name": "associatedTokenProgram";
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
                }
            ];
            "args": [
                {
                    "name": "lotteryId";
                    "type": "u32";
                },
                {
                    "name": "amount";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "generateXorshift32";
            "discriminator": [
                6,
                150,
                132,
                192,
                178,
                95,
                230,
                92
            ];
            "accounts": [
                {
                    "name": "rngAccount";
                    "writable": true;
                }
            ];
            "args": [];
            "returns": "u32";
        },
        {
            "name": "generateXorshift64";
            "discriminator": [
                121,
                42,
                217,
                127,
                230,
                66,
                248,
                168
            ];
            "accounts": [
                {
                    "name": "rngAccount";
                    "writable": true;
                }
            ];
            "args": [];
            "returns": "u64";
        },
        {
            "name": "generateXorshift64F64";
            "discriminator": [
                221,
                241,
                94,
                43,
                174,
                252,
                23,
                183
            ];
            "accounts": [
                {
                    "name": "rngAccount";
                    "writable": true;
                }
            ];
            "args": [];
            "returns": "f64";
        },
        {
            "name": "getExchangeRate";
            "discriminator": [
                153,
                76,
                17,
                194,
                170,
                215,
                89,
                142
            ];
            "accounts": [
                {
                    "name": "reserveAccount";
                }
            ];
            "args": [];
            "returns": "u64";
        },
        {
            "name": "initXorshift";
            "discriminator": [
                200,
                212,
                178,
                199,
                43,
                55,
                162,
                5
            ];
            "accounts": [
                {
                    "name": "rngAccount";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "user";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                }
            ];
            "args": [
                {
                    "name": "seed32";
                    "type": "u32";
                },
                {
                    "name": "seed64";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "initializeLottery";
            "discriminator": [
                113,
                199,
                243,
                247,
                73,
                217,
                33,
                11
            ];
            "accounts": [
                {
                    "name": "lottery";
                    "writable": true;
                },
                {
                    "name": "masterLottery";
                    "writable": true;
                },
                {
                    "name": "authority";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                }
            ];
            "args": [
                {
                    "name": "ticketPrice";
                    "type": "u64";
                },
                {
                    "name": "roundDuration";
                    "type": "i64";
                },
                {
                    "name": "roundCloseSlot";
                    "type": "i64";
                }
            ];
        },
        {
            "name": "initializeMasterLottery";
            "discriminator": [
                230,
                251,
                20,
                10,
                95,
                194,
                15,
                34
            ];
            "accounts": [
                {
                    "name": "masterLottery";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
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
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "payer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                }
            ];
            "args": [];
        },
        {
            "name": "initializeRound";
            "discriminator": [
                43,
                135,
                19,
                93,
                14,
                225,
                131,
                188
            ];
            "accounts": [
                {
                    "name": "round";
                    "writable": true;
                },
                {
                    "name": "lottery";
                    "writable": true;
                },
                {
                    "name": "authority";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                }
            ];
            "args": [];
        },
        {
            "name": "initializeSolwin";
            "discriminator": [
                129,
                38,
                131,
                12,
                164,
                70,
                103,
                134
            ];
            "accounts": [
                {
                    "name": "vault";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    118,
                                    97,
                                    117,
                                    108,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "user";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                }
            ];
            "args": [];
        },
        {
            "name": "mintToken";
            "discriminator": [
                172,
                137,
                183,
                14,
                207,
                110,
                234,
                56
            ];
            "accounts": [
                {
                    "name": "mint";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    109,
                                    105,
                                    110,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "payerMintAta";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account";
                                "path": "payer";
                            },
                            {
                                "kind": "const";
                                "value": [
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
                                ];
                            },
                            {
                                "kind": "account";
                                "path": "mint";
                            }
                        ];
                        "program": {
                            "kind": "const";
                            "value": [
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
                            ];
                        };
                    };
                },
                {
                    "name": "payer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "rent";
                    "address": "SysvarRent111111111111111111111111111111111";
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "tokenProgram";
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
                },
                {
                    "name": "associatedTokenProgram";
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
                }
            ];
            "args": [
                {
                    "name": "amount";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "withdrawSolwin";
            "discriminator": [
                30,
                155,
                238,
                214,
                220,
                144,
                9,
                191
            ];
            "accounts": [
                {
                    "name": "vault";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    118,
                                    97,
                                    117,
                                    108,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "user";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                }
            ];
            "args": [
                {
                    "name": "amount";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "withdrawSolwinApp";
            "discriminator": [
                185,
                211,
                253,
                30,
                170,
                85,
                18,
                25
            ];
            "accounts": [
                {
                    "name": "vault";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    118,
                                    97,
                                    117,
                                    108,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "user";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "mint";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const";
                                "value": [
                                    109,
                                    105,
                                    110,
                                    116,
                                    51,
                                    50
                                ];
                            }
                        ];
                    };
                },
                {
                    "name": "payerMintAta";
                    "writable": true;
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account";
                                "path": "payer";
                            },
                            {
                                "kind": "const";
                                "value": [
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
                                ];
                            },
                            {
                                "kind": "account";
                                "path": "mint";
                            }
                        ];
                        "program": {
                            "kind": "const";
                            "value": [
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
                            ];
                        };
                    };
                },
                {
                    "name": "payer";
                    "writable": true;
                    "signer": true;
                },
                {
                    "name": "rent";
                    "address": "SysvarRent111111111111111111111111111111111";
                },
                {
                    "name": "systemProgram";
                    "address": "11111111111111111111111111111111";
                },
                {
                    "name": "tokenProgram";
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
                },
                {
                    "name": "associatedTokenProgram";
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
                }
            ];
            "args": [
                {
                    "name": "amount";
                    "type": "u64";
                }
            ];
        }
    ];
    "accounts": [
        {
            "name": "fLottery";
            "discriminator": [
                134,
                109,
                151,
                21,
                221,
                59,
                47,
                177
            ];
        },
        {
            "name": "fMasterLottery";
            "discriminator": [
                239,
                219,
                252,
                34,
                153,
                89,
                111,
                131
            ];
        },
        {
            "name": "fRound";
            "discriminator": [
                147,
                82,
                213,
                144,
                218,
                41,
                104,
                153
            ];
        },
        {
            "name": "fTicket";
            "discriminator": [
                250,
                164,
                116,
                219,
                41,
                39,
                170,
                222
            ];
        },
        {
            "name": "fVault";
            "discriminator": [
                95,
                27,
                165,
                136,
                239,
                243,
                172,
                199
            ];
        },
        {
            "name": "lottery";
            "discriminator": [
                162,
                182,
                26,
                12,
                164,
                214,
                112,
                3
            ];
        },
        {
            "name": "masterLottery";
            "discriminator": [
                66,
                171,
                237,
                152,
                10,
                184,
                77,
                116
            ];
        },
        {
            "name": "rngAccount";
            "discriminator": [
                21,
                194,
                30,
                140,
                238,
                67,
                180,
                10
            ];
        },
        {
            "name": "round";
            "discriminator": [
                87,
                127,
                165,
                51,
                73,
                78,
                116,
                174
            ];
        },
        {
            "name": "ticket";
            "discriminator": [
                41,
                228,
                24,
                165,
                78,
                90,
                235,
                200
            ];
        },
        {
            "name": "userData";
            "discriminator": [
                139,
                248,
                167,
                203,
                253,
                220,
                210,
                221
            ];
        },
        {
            "name": "vault";
            "discriminator": [
                211,
                8,
                232,
                43,
                2,
                152,
                117,
                119
            ];
        }
    ];
    "errors": [
        {
            "code": 6000;
            "name": "winnerAlreadyExists";
            "msg": "Winner already exists";
        },
        {
            "code": 6001;
            "name": "roundNotOpen";
            "msg": "Round not open";
        },
        {
            "code": 6002;
            "name": "invalidLotteryId";
            "msg": "Invalid lottery id";
        },
        {
            "code": 6003;
            "name": "invalidRoundId";
            "msg": "Invalid round id";
        },
        {
            "code": 6004;
            "name": "roundNotCloseable";
            "msg": "Round not closeable";
        },
        {
            "code": 6005;
            "name": "invalidAccount";
            "msg": "Invalid lottery account";
        },
        {
            "code": 6006;
            "name": "notUserDataOWner";
            "msg": "Signer not user data owner";
        },
        {
            "code": 6007;
            "name": "notEnoughCredits";
            "msg": "Not enough credits";
        },
        {
            "code": 6008;
            "name": "winnerDataNotFound";
            "msg": "Winner Data Not Found";
        },
        {
            "code": 6009;
            "name": "roundCreationFailed";
            "msg": "Round Creation Failed";
        },
        {
            "code": 6010;
            "name": "winnerTicketNotFound";
            "msg": "Winner Ticket Not Found";
        }
    ];
    "types": [
        {
            "name": "fLottery";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "id";
                        "type": "u32";
                    },
                    {
                        "name": "authority";
                        "type": "pubkey";
                    },
                    {
                        "name": "ticketPrice";
                        "type": "u64";
                    },
                    {
                        "name": "lastRoundId";
                        "type": "u32";
                    },
                    {
                        "name": "roundDuration";
                        "type": "i64";
                    },
                    {
                        "name": "roundCloseSlot";
                        "type": "i64";
                    },
                    {
                        "name": "bump";
                        "type": "u8";
                    }
                ];
            };
        },
        {
            "name": "fMasterLottery";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "lastLotteryId";
                        "type": "u32";
                    }
                ];
            };
        },
        {
            "name": "fRound";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "id";
                        "type": "u32";
                    },
                    {
                        "name": "authority";
                        "type": "pubkey";
                    },
                    {
                        "name": "lotteryId";
                        "type": "u32";
                    },
                    {
                        "name": "ticketPrice";
                        "type": "u64";
                    },
                    {
                        "name": "lastTicketId";
                        "type": "u32";
                    },
                    {
                        "name": "startTime";
                        "type": "i64";
                    },
                    {
                        "name": "closeTarget";
                        "type": "i64";
                    },
                    {
                        "name": "minCloseTime";
                        "type": "i64";
                    },
                    {
                        "name": "maxCloseTime";
                        "type": "i64";
                    },
                    {
                        "name": "status";
                        "type": {
                            "defined": {
                                "name": "fRoundStatus";
                            };
                        };
                    },
                    {
                        "name": "winnerId";
                        "type": {
                            "option": "u32";
                        };
                    },
                    {
                        "name": "reward";
                        "type": "u64";
                    }
                ];
            };
        },
        {
            "name": "fRoundStatus";
            "type": {
                "kind": "enum";
                "variants": [
                    {
                        "name": "init";
                    },
                    {
                        "name": "open";
                    },
                    {
                        "name": "finished";
                    },
                    {
                        "name": "closed";
                    }
                ];
            };
        },
        {
            "name": "fTicket";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "id";
                        "type": "u32";
                    },
                    {
                        "name": "lotteryId";
                        "type": "u32";
                    },
                    {
                        "name": "roundId";
                        "type": "u32";
                    },
                    {
                        "name": "authority";
                        "type": "pubkey";
                    },
                    {
                        "name": "winnerReward";
                        "type": "u64";
                    },
                    {
                        "name": "claimed";
                        "type": "bool";
                    }
                ];
            };
        },
        {
            "name": "fVault";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "solBalance";
                        "type": "u64";
                    },
                    {
                        "name": "tokenBalance";
                        "type": "u64";
                    }
                ];
            };
        },
        {
            "name": "initTokenParams";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "name";
                        "type": "string";
                    },
                    {
                        "name": "symbol";
                        "type": "string";
                    },
                    {
                        "name": "uri";
                        "type": "string";
                    },
                    {
                        "name": "decimals";
                        "type": "u8";
                    }
                ];
            };
        },
        {
            "name": "lottery";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "id";
                        "type": "u32";
                    },
                    {
                        "name": "authority";
                        "type": "pubkey";
                    },
                    {
                        "name": "ticketPrice";
                        "type": "u64";
                    },
                    {
                        "name": "lastRoundId";
                        "type": "u32";
                    },
                    {
                        "name": "roundDuration";
                        "type": "i64";
                    },
                    {
                        "name": "roundCloseSlot";
                        "type": "i64";
                    }
                ];
            };
        },
        {
            "name": "masterLottery";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "lastLotteryId";
                        "type": "u32";
                    }
                ];
            };
        },
        {
            "name": "rngAccount";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "xorshift32";
                        "type": {
                            "defined": {
                                "name": "xorshift32";
                            };
                        };
                    },
                    {
                        "name": "xorshift64";
                        "type": {
                            "defined": {
                                "name": "xorshift64";
                            };
                        };
                    }
                ];
            };
        },
        {
            "name": "round";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "id";
                        "type": "u32";
                    },
                    {
                        "name": "authority";
                        "type": "pubkey";
                    },
                    {
                        "name": "lotteryId";
                        "type": "u32";
                    },
                    {
                        "name": "ticketPrice";
                        "type": "u64";
                    },
                    {
                        "name": "lastTicketId";
                        "type": "u32";
                    },
                    {
                        "name": "startTime";
                        "type": "i64";
                    },
                    {
                        "name": "closeTarget";
                        "type": "i64";
                    },
                    {
                        "name": "minCloseTime";
                        "type": "i64";
                    },
                    {
                        "name": "maxCloseTime";
                        "type": "i64";
                    },
                    {
                        "name": "status";
                        "type": {
                            "defined": {
                                "name": "roundStatus";
                            };
                        };
                    },
                    {
                        "name": "winnerId";
                        "type": {
                            "option": "u32";
                        };
                    }
                ];
            };
        },
        {
            "name": "roundStatus";
            "type": {
                "kind": "enum";
                "variants": [
                    {
                        "name": "init";
                    },
                    {
                        "name": "open";
                    },
                    {
                        "name": "finished";
                    },
                    {
                        "name": "closed";
                    }
                ];
            };
        },
        {
            "name": "ticket";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "id";
                        "type": "u32";
                    },
                    {
                        "name": "lotteryId";
                        "type": "u32";
                    },
                    {
                        "name": "roundId";
                        "type": "u32";
                    },
                    {
                        "name": "authority";
                        "type": "pubkey";
                    }
                ];
            };
        },
        {
            "name": "userData";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "credits";
                        "type": "u64";
                    },
                    {
                        "name": "rewards";
                        "type": "u64";
                    },
                    {
                        "name": "owner";
                        "type": "pubkey";
                    }
                ];
            };
        },
        {
            "name": "vault";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "solBalance";
                        "type": "u64";
                    },
                    {
                        "name": "tokenBalance";
                        "type": "u64";
                    }
                ];
            };
        },
        {
            "name": "xorshift32";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "state";
                        "type": "u32";
                    }
                ];
            };
        },
        {
            "name": "xorshift64";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "state";
                        "type": "u64";
                    }
                ];
            };
        }
    ];
};
