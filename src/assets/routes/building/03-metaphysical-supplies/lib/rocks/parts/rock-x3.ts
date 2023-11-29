import rock_x3_bin from './rock-x3.bin?url';

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
			"name": "rock.004",
			"rotation": [
				-0.2628058195114136,
				0.2319280505180359,
				-0.44156715273857117,
				0.8259303569793701
			],
			"translation": [
				-0.22748541831970215,
				1.43274986743927,
				-2.244342088699341
			]
		}
	],
	"materials": [
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
			"name": "Material.001",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.8394935727119446,
					0.8394935727119446,
					0.8394935727119446,
					1
				],
				"metallicFactor": 0.921450138092041,
				"roughnessFactor": 0.17824772000312805
			}
		}
	],
	"meshes": [
		{
			"name": "rock.004",
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
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 207,
			"max": [
				0.5260526537895203,
				0.6802312731742859,
				0.5083211660385132
			],
			"min": [
				-0.32422879338264465,
				-0.7517397403717041,
				-0.41761189699172974
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 207,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 207,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 576,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2198,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2200,
			"uri": rock_x3_bin
		}
	]
}