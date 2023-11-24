import clock_bin from './clock.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_transmission",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "clock.070",
			"rotation": [
				-0.05871877819299698,
				-0.2902865707874298,
				-0.1860506236553192,
				0.9368410706520081
			],
			"translation": [
				-2.036381959915161,
				-1.468349814414978,
				0.5335461497306824
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"name": "Material.004",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0,
					0,
					0,
					1
				],
				"metallicFactor": 0,
				"roughnessFactor": 0.5
			}
		},
		{
			"doubleSided": true,
			"name": "clock, body",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.800000011920929,
					0.800000011920929,
					0.800000011920929,
					1
				],
				"roughnessFactor": 0.20866140723228455
			}
		},
		{
			"doubleSided": true,
			"name": "clock, face",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.800000011920929,
					0.800000011920929,
					0.800000011920929,
					1
				],
				"metallicFactor": 0,
				"roughnessFactor": 0.5
			}
		},
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_transmission": {
					"transmissionFactor": 1
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "clock, glass",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.800000011920929,
					0.800000011920929,
					0.800000011920929,
					1
				],
				"metallicFactor": 0,
				"roughnessFactor": 0.011811017990112305
			}
		},
		{
			"doubleSided": true,
			"name": "clock, hand, plastic",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0,
					0,
					0,
					1
				],
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Text.019",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				},
				{
					"attributes": {
						"POSITION": 4,
						"NORMAL": 5,
						"TEXCOORD_0": 6
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 1,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 7,
					"material": 1,
					"mode": 4
				},
				{
					"attributes": {
						"POSITION": 8,
						"NORMAL": 9,
						"TEXCOORD_0": 10
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 2,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 11,
					"material": 2,
					"mode": 4
				},
				{
					"attributes": {
						"POSITION": 12,
						"NORMAL": 13,
						"TEXCOORD_0": 14
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 3,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 15,
					"material": 3,
					"mode": 4
				},
				{
					"attributes": {
						"POSITION": 16,
						"NORMAL": 17,
						"TEXCOORD_0": 18
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 4,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 19,
					"material": 4,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 708,
			"max": [
				0.9936052560806274,
				0.023804590106010437,
				0.9936051964759827
			],
			"min": [
				-0.9936051964759827,
				0.021804584190249443,
				-0.9936052560806274
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 708,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 708,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 1656,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 352,
			"max": [
				1.0711169242858887,
				0.10178947448730469,
				1.0711169242858887
			],
			"min": [
				-1.0711169242858887,
				-0.10355567932128906,
				-1.0711170434951782
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 352,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 352,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 2010,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 32,
			"max": [
				1,
				0,
				1
			],
			"min": [
				-1,
				0,
				-1
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 32,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 32,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 90,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 192,
			"max": [
				1,
				0.06542205810546875,
				1
			],
			"min": [
				-1,
				0.023804664611816406,
				-1
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 192,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 192,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 372,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 72,
			"max": [
				0.05000005662441254,
				0.018360309302806854,
				0.10265111923217773
			],
			"min": [
				-0.04999998211860657,
				-1.1175870895385742e-8,
				-0.913521945476532
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 72,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 72,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 108,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3775,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 2443,
			"byteOffset": 3776
		},
		{
			"buffer": 0,
			"byteLength": 418,
			"byteOffset": 6220
		},
		{
			"buffer": 0,
			"byteLength": 1009,
			"byteOffset": 6640
		},
		{
			"buffer": 0,
			"byteLength": 572,
			"byteOffset": 7652
		}
	],
	"buffers": [
		{
			"byteLength": 8224,
			"uri": clock_bin
		}
	]
}