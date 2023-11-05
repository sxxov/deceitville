import rock_x29_bin from './rock-x29.bin?url';

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
			"name": "rock.030",
			"rotation": [
				-0.8122806549072266,
				-0.306760311126709,
				-0.4488406181335449,
				0.21128268539905548
			],
			"translation": [
				-0.8859089016914368,
				0.4762292206287384,
				-3.5596659183502197
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
			"name": "rock.030",
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
			"count": 152,
			"max": [
				0.3779953718185425,
				0.5801180005073547,
				0.40596839785575867
			],
			"min": [
				-0.377673864364624,
				-0.6308938264846802,
				-0.38308438658714294
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 152,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 152,
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
			"byteLength": 1618,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 1620,
			"uri": rock_x29_bin
		}
	]
}