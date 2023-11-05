import rock_x21_bin from './rock-x21.bin?url';

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
			"name": "rock.022",
			"rotation": [
				-0.6590662598609924,
				0.7068066000938416,
				0.00515756057575345,
				0.2569620609283447
			],
			"translation": [
				-1.284533143043518,
				0.3253217339515686,
				-2.332310676574707
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
			"name": "rock.022",
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
			"count": 346,
			"max": [
				0.3645152151584625,
				0.5348572134971619,
				0.45521000027656555
			],
			"min": [
				-0.35264936089515686,
				-0.5559701323509216,
				-0.3691333532333374
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 346,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 346,
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
			"byteLength": 3549,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 3552,
			"uri": rock_x21_bin
		}
	]
}