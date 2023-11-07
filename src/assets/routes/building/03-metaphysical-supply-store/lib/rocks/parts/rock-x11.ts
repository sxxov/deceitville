import rock_x11_bin from './rock-x11.bin?url';

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
			"name": "rock.012",
			"rotation": [
				0.29902270436286926,
				0.5677270889282227,
				0.39119136333465576,
				0.6597277522087097
			],
			"translation": [
				1.5180538892745972,
				1.1051583290100098,
				-3.2755045890808105
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
			"name": "rock.012",
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
			"count": 273,
			"max": [
				0.4988817572593689,
				0.6800811290740967,
				0.4736039638519287
			],
			"min": [
				-0.4846217632293701,
				-0.6938493251800537,
				-0.3692275583744049
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 273,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 273,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 864,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2799,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2800,
			"uri": rock_x11_bin
		}
	]
}