import rock_x28_bin from './rock-x28.bin?url';

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
			"name": "rock.029",
			"rotation": [
				0.04656578227877617,
				0.8625040054321289,
				0.4590776860713959,
				0.20776468515396118
			],
			"translation": [
				0.38339927792549133,
				0.7003502249717712,
				-2.4343204498291016
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
			"name": "rock.029",
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
			"count": 208,
			"max": [
				0.4705190658569336,
				0.6860009431838989,
				0.44547271728515625
			],
			"min": [
				-0.2657022774219513,
				-0.6913149952888489,
				-0.3527844250202179
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 208,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 208,
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
			"byteLength": 2178,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2180,
			"uri": rock_x28_bin
		}
	]
}